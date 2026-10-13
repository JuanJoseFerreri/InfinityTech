import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const root = new URL('../', import.meta.url);
async function loadTs(path) {
  const code = ts.transpileModule(await readFile(new URL(path, root), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  }).outputText;
  const module = { exports: {} };
  new Function('module', 'exports', code)(module, module.exports);
  return module.exports;
}
const { IMAGE_FRAMES, LOCAL_PRODUCT_GALLERY } = await loadTs('src/app/product-image-data.ts');
const { fitProductImage } = await loadTs('src/app/product-image-layout.ts');
const { PRODUCT_IMAGES } = await loadTs('server/src/product-images.ts');
const sources = JSON.parse(await readFile(new URL('public/imgs/sources.json', root), 'utf8'));
assert.equal(Object.keys(PRODUCT_IMAGES).length, 39);
assert.equal(new Set(sources.map(source => source.path)).size, sources.length);
assert.ok(sources.length >= 50, 'Every new product must have at least one local image');
assert.deepEqual(fitProductImage(), { width: 90, height: 90, left: 5, top: 5 });
for (const [id, product] of Object.entries(PRODUCT_IMAGES)) {
  assert.equal(LOCAL_PRODUCT_GALLERY[id][0], product.imageUrl);
  assert.equal(new Set(LOCAL_PRODUCT_GALLERY[id]).size, LOCAL_PRODUCT_GALLERY[id].length);
}
for (const source of sources) {
  assert.ok(LOCAL_PRODUCT_GALLERY[source.id].includes(source.path));
  const file = await readFile(new URL('public' + source.path, root));
  assert.equal(file.subarray(1, 4).toString(), 'PNG');
  const chunks = [];
  for (let offset = 8; offset < file.length; offset += 12 + file.readUInt32BE(offset)) {
    chunks.push(file.subarray(offset + 4, offset + 8).toString());
  }
  assert.ok([4, 6].includes(file[25]) || chunks.includes('tRNS'), 'PNG must include transparency');
  const meta = IMAGE_FRAMES[source.path];
  assert.equal(file.readUInt32BE(16), meta.width);
  assert.equal(file.readUInt32BE(20), meta.height);
  const frame = fitProductImage(meta);
  assert.ok(Math.abs(frame.width / meta.width - frame.height / meta.height) < 1e-9, 'No stretching');
  const [l, t, r, b] = meta.bounds;
  const x1 = frame.left + l * frame.width / meta.width;
  const x2 = frame.left + r * frame.width / meta.width;
  const y1 = frame.top + t * frame.height / meta.height;
  const y2 = frame.top + b * frame.height / meta.height;
  assert.ok(x1 >= 4.999 && y1 >= 4.999 && x2 <= 95.001 && y2 <= 95.001, 'Visible product fits');
  assert.ok(Math.abs((x1 + x2) / 2 - 50) < 1e-9 && Math.abs((y1 + y2) / 2 - 50) < 1e-9, 'Centered');
  if (process.argv.includes('--http')) {
    const response = await fetch('http://localhost:4200' + source.path);
    assert.equal(response.status, 200, source.path);
    assert.ok(response.headers.get('content-type')?.includes('image/png'));
    assert.deepEqual(Buffer.from(await response.arrayBuffer()), file);
  }
}
console.log(`OK: ${Object.keys(PRODUCT_IMAGES).length} productos, ${sources.length} PNG con transparencia, encuadres centrados sin deformación${process.argv.includes('--http') ? ', descargas locales verificadas' : ''}.`);
