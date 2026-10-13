import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { pool } from './db.js';
import { PRODUCT_IMAGES } from './product-images.js';

// Explicit, idempotent image-only migration. Never changes stock, prices or orders.
const client = await pool.connect();
try {
  await client.query('BEGIN');
  let updated = 0;
  for (const [id, image] of Object.entries(PRODUCT_IMAGES)) {
    await access(new URL('../../public' + image.imageUrl, import.meta.url));
    const before = await client.query('SELECT * FROM products WHERE id=$1 FOR UPDATE', [id]);
    if (!before.rowCount) continue;
    if (before.rows[0].name !== image.name) throw new Error(`El producto ${id} ha cambiado de nombre. Revisa la correspondencia antes de actualizar imágenes.`);
    const result = await client.query(
      'UPDATE products SET image_url=$1,revision=revision+1 WHERE id=$2 AND image_url IS DISTINCT FROM $1 RETURNING *',
      [image.imageUrl, id]
    );
    if (result.rowCount) {
      const { image_url: oldImage, revision: oldRevision, ...original } = before.rows[0];
      const { image_url: newImage, revision: newRevision, ...current } = result.rows[0];
      assert.deepEqual(current, original, 'La migración debe modificar únicamente imagen y revisión.');
      updated++;
    }
  }
  await client.query('COMMIT');
  console.log(`${updated} imágenes principales actualizadas. Precios, stock y pedidos conservados.`);
} catch (error) {
  await client.query('ROLLBACK');
  throw error;
} finally {
  client.release();
  await pool.end();
}
