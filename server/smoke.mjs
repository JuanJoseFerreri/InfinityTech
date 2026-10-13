import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
const child = spawn(process.execPath, ['dist/index.js'], {
  env: { ...process.env, PORT: '3307', DATABASE_URL: 'postgresql://test:test@127.0.0.1:1/test' },
  stdio: ['ignore', 'pipe', 'inherit']
});
try {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('API no arrancó')), 10000);
    child.stdout.once('data', () => { clearTimeout(timer); resolve(); });
    child.once('error', reject);
    child.once('exit', () => { clearTimeout(timer); reject(new Error('API terminó antes de arrancar')); });
  });
  const invalid = await fetch('http://127.0.0.1:3307/api/orders', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [] })
  });
  assert.equal(invalid.status, 400);
  const health = await fetch('http://127.0.0.1:3307/api/health');
  assert.equal(health.status, 503);
  const missing = await fetch('http://127.0.0.1:3307/api/orders');
  assert.equal(missing.status, 404);
  for (const path of ['/api/admin/session','/api/admin/products','/api/admin/orders']) {
    const protectedResponse = await fetch('http://127.0.0.1:3307'+path);
    assert.equal(protectedResponse.status, 401);
  }
  const crossOrigin = await fetch('http://127.0.0.1:3307/api/admin/login',{
    method:'POST',headers:{'Content-Type':'application/json'},body:'{}'
  });
  assert.equal(crossOrigin.status,403);
  const { hashPassword, verifyPassword } = await import('./dist/password.js');
  const hash = await hashPassword('Una-clave-de-prueba-123');
  assert.equal(await verifyPassword('Una-clave-de-prueba-123',hash),true);
  assert.equal(await verifyPassword('otra-clave',hash),false);
  console.log('OK: rutas admin protegidas, bloqueo de peticiones sin cabecera y hash de contraseñas.');
  console.log('OK: validación 400, base inaccesible 503, pedidos privados 404.');
} finally { child.kill(); }
