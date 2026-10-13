import { randomUUID } from 'node:crypto';
import { pool } from './db.js';
import { hashPassword } from './password.js';
const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;
try {
 if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !password || password.length < 12 || password.length > 128) {
  throw new Error('Configura ADMIN_EMAIL y ADMIN_PASSWORD (12–128 caracteres) en .env.');
 }
 const result = await pool.query('INSERT INTO admins(id,email,password_hash) VALUES($1,$2,$3) ON CONFLICT(email) DO NOTHING RETURNING id',
  [randomUUID(),email,await hashPassword(password)]);
 console.log(result.rowCount ? 'Administrador creado. Elimina ADMIN_PASSWORD de .env.' : 'Ese administrador ya existe. No se ha modificado su contraseña.');
} finally { await pool.end(); }

