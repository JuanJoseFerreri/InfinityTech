import { Router } from 'express';
import { createHash, randomBytes } from 'node:crypto';
import { z } from 'zod';
import { pool } from './db.js';
import { hashPassword, verifyPassword } from './password.js';
export const admin = Router();
const digest = (value: string) => createHash('sha256').update(value).digest('hex');
const sessionToken = (cookie = '') => cookie.split(';').map(p=>p.trim()).find(p=>p.startsWith('tm_admin='))?.slice(9) ?? '';
const cookieOptions = { httpOnly: true, sameSite: 'strict' as const, secure: process.env.NODE_ENV === 'production', path: '/api/admin' };
const attempts = new Map<string, { count: number; until: number }>();
const dummyHash = await hashPassword(randomBytes(32).toString('hex'));
admin.use((_req,res,next) => { res.setHeader('Cache-Control','no-store'); next(); });
// Custom header blocks browser cross-origin form submissions; no CORS access is granted.
admin.use((req,res,next) => {
 if (!['GET','HEAD'].includes(req.method) && req.get('X-Admin-Request') !== '1') {
  res.status(403).json({ error: 'Petición no permitida.' }); return;
 }
 next();
});
admin.post('/login', async (req,res) => {
 const now = Date.now();
 for (const [key,value] of attempts) if (value.until <= now) attempts.delete(key);
 const ip = req.ip ?? 'local';
 const attempt = attempts.get(ip) ?? { count: 0, until: now+15*60*1000 };
 if (attempt.count >= 10) { res.status(429).json({error:'Demasiados intentos. Espera 15 minutos.'}); return; }
 attempt.count++; attempts.set(ip,attempt);
 const input = z.object({ email:z.string().trim().email().max(254), password:z.string().min(1).max(128) }).safeParse(req.body);
 if (!input.success) { res.status(400).json({error:'Revisa el correo y la contraseña.'}); return; }
 const found = await pool.query('SELECT id,password_hash FROM admins WHERE email=$1',[input.data.email.toLowerCase()]);
 const valid = await verifyPassword(input.data.password,found.rows[0]?.password_hash ?? dummyHash);
 if (!valid || !found.rowCount) { res.status(401).json({error:'Credenciales incorrectas.'}); return; }
 attempts.delete(ip);
 const token = randomBytes(32).toString('hex');
 await pool.query('DELETE FROM admin_sessions WHERE expires_at<=now()');
 await pool.query("INSERT INTO admin_sessions(token_hash,admin_id,expires_at) VALUES($1,$2,now()+interval '8 hours')",[digest(token),found.rows[0].id]);
 res.cookie('tm_admin',token,{...cookieOptions,maxAge:8*60*60*1000});
 res.json({ok:true});
});
admin.use(async (req,res,next) => {
 const token = sessionToken(req.headers.cookie);
 if (!/^[a-f0-9]{64}$/.test(token)) { res.status(401).json({error:'Inicia sesión para acceder.'}); return; }
 const session = await pool.query('SELECT admin_id FROM admin_sessions WHERE token_hash=$1 AND expires_at>now()',[digest(token)]);
 if (!session.rowCount) { res.status(401).json({error:'La sesión ha caducado.'}); return; }
 next();
});
admin.get('/session', (_req,res) => { res.json({ok:true}); });
admin.post('/logout', async (req,res) => {
 await pool.query('DELETE FROM admin_sessions WHERE token_hash=$1',[digest(sessionToken(req.headers.cookie))]);
 res.clearCookie('tm_admin',cookieOptions); res.json({ok:true});
});
admin.get('/products',async (_req,res) => {
 const result = await pool.query('SELECT id,name,description,price_cents,stock,revision FROM products ORDER BY id');
 res.json(result.rows);
});
const productSchema = z.object({
 name:z.string().trim().min(2).max(150), description:z.string().trim().min(3).max(1000),
 price_cents:z.number().int().min(1).max(10000000), stock:z.number().int().min(0).max(100000),
 revision:z.number().int().min(1)
}).strict();
admin.put('/products/:id', async (req,res) => {
 const parsed = productSchema.safeParse(req.body);
 const id = Number(req.params.id);
 if (!parsed.success || !Number.isSafeInteger(id) || id<1) { res.status(400).json({error:'Datos de producto inválidos.'}); return; }
 const p = parsed.data;
 const result = await pool.query('UPDATE products SET name=$1,description=$2,price_cents=$3,stock=$4,revision=revision+1 WHERE id=$5 AND revision=$6 RETURNING id',
 [p.name,p.description,p.price_cents,p.stock,id,p.revision]);
 if (!result.rowCount) { res.status(409).json({error:'El producto cambió. Recarga antes de guardar.'}); return; }
 res.json({ok:true});
});
admin.get('/orders', async (req,res) => {
 const page = Math.max(1,Math.min(100000,Number(req.query.page)||1));
 const result = await pool.query(`SELECT o.id,o.customer_name,o.email,o.address,o.total_cents,o.status,o.created_at,
 (SELECT json_agg(json_build_object('name',i.product_name,'quantity',i.quantity,'price_cents',i.unit_price_cents))
 FROM order_items i WHERE i.order_id=o.id) AS items
 FROM orders o ORDER BY o.created_at DESC,o.id LIMIT 21 OFFSET $1`,[(Math.floor(page)-1)*20]);
 res.json({ orders:result.rows.slice(0,20),hasMore:result.rows.length>20 });
});
admin.patch('/orders/:id',async (req,res) => {
 const id = z.string().uuid().safeParse(req.params.id);
 const input = z.object({status:z.enum(['paid','cancelled'])}).strict().safeParse(req.body);
 if (!id.success || !input.success) { res.status(400).json({error:'Estado inválido.'}); return; }
 const client = await pool.connect();
 try {
  await client.query('BEGIN');
  const order = await client.query('SELECT status FROM orders WHERE id=$1 FOR UPDATE',[id.data]);
  if (!order.rowCount) { await client.query('ROLLBACK'); res.status(404).json({error:'Pedido no encontrado.'}); return; }
  if (order.rows[0].status === input.data.status) { await client.query('COMMIT'); res.json({ok:true}); return; }
  if (order.rows[0].status !== 'pending') { await client.query('ROLLBACK'); res.status(409).json({error:'Solo puedes cambiar pedidos pendientes.'}); return; }
  if (input.data.status === 'cancelled') {
   const items = await client.query('SELECT product_id,quantity FROM order_items WHERE order_id=$1 ORDER BY product_id',[id.data]);
   for (const item of items.rows) await client.query('UPDATE products SET stock=stock+$1,revision=revision+1 WHERE id=$2',[item.quantity,item.product_id]);
  }
  await client.query('UPDATE orders SET status=$1 WHERE id=$2',[input.data.status,id.data]);
  await client.query('COMMIT'); res.json({ok:true});
 } catch(error) { await client.query('ROLLBACK'); throw error; }
 finally { client.release(); }
});

