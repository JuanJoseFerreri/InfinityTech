import { readFile } from 'node:fs/promises';
import { pool } from './db.js';
import { products } from './seed.js';
const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query(await readFile(new URL('../schema.sql', import.meta.url), 'utf8'));
  await client.query(await readFile(new URL('../admin.sql', import.meta.url), 'utf8'));
  await client.query(await readFile(new URL('../catalog-images.sql', import.meta.url), 'utf8'));
  for (const [id,name] of [[1,'Apple'],[2,'Samsung'],[3,'Xiaomi']]) {
    await client.query('INSERT INTO brands(id,name) VALUES($1,$2) ON CONFLICT DO NOTHING',[id,name]);
  }
  for (const [id,name] of [[1,'Smartphones'],[2,'Audio'],[3,'Wearables']]) {
    await client.query('INSERT INTO categories(id,name) VALUES($1,$2) ON CONFLICT DO NOTHING',[id,name]);
  }
  for (const p of products) {
    // No reutilizar un ID reservado si ya pertenece a otro producto del usuario.
    const existing = await client.query('SELECT name FROM products WHERE id=$1', [p.id]);
    if (existing.rowCount && existing.rows[0].name !== p.name) {
      throw new Error(`El ID ${p.id} ya pertenece a otro producto. No se ha modificado el catálogo.`);
    }
    await client.query(`INSERT INTO products
      (id,name,brand_id,category_id,release_year,price_cents,stock,icon,color,description,official_url)
      VALUES($1,$2,$3,$4,$5,$6,20,$7,$8,$9,$10) ON CONFLICT DO NOTHING`,
      [p.id,p.name,['Apple','Samsung','Xiaomi'].indexOf(p.brand)+1,
       ['Smartphones','Audio','Wearables'].indexOf(p.category)+1,p.releaseYear,
       Math.round(p.price*100),p.icon,p.color,p.description,p.officialUrl]);
    // Añade fotos solo donde faltan, conservando precio, stock y ediciones.
    await client.query("UPDATE products SET image_url=$1 WHERE id=$2 AND name=$3 AND image_url=''", [p.imageUrl,p.id,p.name]);
  }
  await client.query('COMMIT');
  console.log('Tablas listas. Catálogo inicial insertado sin sobrescribir datos existentes.');
} catch(error) { await client.query('ROLLBACK'); throw error; }
finally { client.release(); await pool.end(); }
