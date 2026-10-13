import express from 'express';
import { randomUUID, createHash } from 'node:crypto';
import { z } from 'zod';
import { pool } from './db.js';
import { admin } from './admin.js';

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '16kb' }));
app.use('/api/admin', admin);
app.get('/api/health', async (_req, res) => {
  await pool.query('SELECT 1');
  res.json({ status: 'ok' });
});
app.get('/api/products', async (_req, res) => {
  const result = await pool.query(`SELECT p.id, p.name, b.name AS brand, c.name AS category,
    p.release_year AS "releaseYear", p.price_cents AS "priceCents", p.stock,
    p.icon, p.color, p.description, p.official_url AS "officialUrl", p.image_url AS "imageUrl"
    FROM products p JOIN brands b ON b.id=p.brand_id
    JOIN categories c ON c.id=p.category_id ORDER BY p.id`);
  res.json(result.rows.map(p => ({ ...p, price: p.priceCents / 100, badge: String(p.releaseYear) })));
});
const orderSchema = z.object({
  requestId: z.string().uuid(),
  customer: z.object({
    name: z.string().trim().min(3).max(100),
    email: z.string().trim().email().max(254),
    address: z.string().trim().min(10).max(300)
  }).strict(),
  items: z.array(z.object({
    productId: z.number().int().positive(),
    quantity: z.number().int().min(1).max(99)
  }).strict()).min(1).max(50)
}).strict().refine(data => new Set(data.items.map(i => i.productId)).size === data.items.length,
  'No repitas productos en el pedido.');

app.post('/api/orders', async (req, res) => {
  const parsed = orderSchema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: 'Revisa los datos del comprador y las cantidades.' }); return; }
  const data = parsed.data;
  data.items.sort((a,b) => a.productId - b.productId);
  const fingerprint = createHash('sha256').update(JSON.stringify(data)).digest('hex');
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    // Serializa reintentos con la misma clave sin duplicar pedidos.
    await client.query('SELECT pg_advisory_xact_lock(hashtext($1))', [data.requestId]);
    const previous = await client.query('SELECT id, total_cents, fingerprint FROM orders WHERE request_id=$1', [data.requestId]);
    if (previous.rowCount) {
      await client.query('COMMIT');
      if (previous.rows[0].fingerprint !== fingerprint) {
        res.status(409).json({ error: 'La referencia de envío ya corresponde a otro pedido.' }); return;
      }
      res.json({ id: previous.rows[0].id, total: previous.rows[0].total_cents / 100 }); return;
    }
    const products = await client.query('SELECT id,name,price_cents,stock FROM products WHERE id=ANY($1::int[]) ORDER BY id FOR UPDATE',
      [data.items.map(i => i.productId)]);
    let subtotal = 0;
    for (const item of data.items) {
      const product = products.rows.find(p => p.id === item.productId);
      if (!product || product.stock < item.quantity) {
        await client.query('ROLLBACK');
        res.status(409).json({ error: 'No hay stock suficiente. Revisa el carrito y actualiza el catálogo.' }); return;
      }
      subtotal += product.price_cents * item.quantity;
    }
    const shipping = subtotal >= 5000 ? 0 : 499;
    const id = randomUUID();
    await client.query(`INSERT INTO orders
      (id,request_id,fingerprint,customer_name,email,address,subtotal_cents,shipping_cents,total_cents)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [id,data.requestId,fingerprint,data.customer.name,data.customer.email,data.customer.address,subtotal,shipping,subtotal+shipping]);
    for (const item of data.items) {
      const product = products.rows.find(p => p.id === item.productId)!;
      await client.query('INSERT INTO order_items(order_id,product_id,product_name,unit_price_cents,quantity) VALUES($1,$2,$3,$4,$5)',
        [id,product.id,product.name,product.price_cents,item.quantity]);
      await client.query('UPDATE products SET stock=stock-$1,revision=revision+1 WHERE id=$2', [item.quantity,product.id]);
    }
    await client.query('COMMIT');
    res.status(201).json({ id, total: (subtotal + shipping) / 100 });
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally { client.release(); }
});
app.use((_req,res) => { res.status(404).json({ error: 'Ruta no encontrada.' }); });
app.use((error: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = error.type === 'entity.parse.failed' ? 400 : error.type === 'entity.too.large' ? 413 : 503;
  res.status(status).json({ error: status === 503 ? 'Servicio no disponible. Inténtalo de nuevo.' : 'Petición inválida.' });
});
const server = app.listen(Number(process.env.PORT ?? 3000), '127.0.0.1', () => console.log('API: http://127.0.0.1:' + (process.env.PORT ?? 3000)));
process.on('SIGINT', () => server.close(() => { void pool.end(); }));
