import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

// Isolated contract tests with simulated HTTP and Angular injection.
// Compilation and browser smoke tests complement these; no real account is used.
const load = async (file, dependencies) => {
  const source = await readFile(new URL('../src/app/' + file, import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      experimentalDecorators: true
    }
  }).outputText;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', compiled)(name => {
    assert.ok(name in dependencies, 'Unexpected dependency: ' + name);
    return dependencies[name];
  }, module, module.exports);
  return module.exports;
};

const signal = initial => {
  let value = initial;
  const get = () => value;
  get.set = next => { value = next; };
  return get;
};
const core = { signal, Injectable: () => target => target };
const { AuthService } = await load('auth.service.ts', { '@angular/core': core });
const auth = new AuthService();
class Router {}
class DestroyRef {}
const redirects = [];
const router = {
  createUrlTree: commands => ({ commands }),
  navigateByUrl: async (url, options) => {
    assert.equal(options.replaceUrl, true);
    redirects.push(url);
    return true;
  }
};
const destroyRef = { destroyed: false };
const inject = token => {
  if (token === AuthService) return auth;
  if (token === Router) return router;
  if (token === DestroyRef) return destroyRef;
  throw Error('Unexpected injection');
};
const dependencies = {
  '@angular/core': { ...core, inject, DestroyRef, Component: () => target => target, HostListener: () => () => {} },
  '@angular/router': { Router, RouterLink: class {} },
  './auth.service': { AuthService }
};
const { adminGuard } = await load('admin.guard.ts', dependencies);
const { LEGAL_PAGES } = await load('legal-content.ts', {});
const { routes } = await load('app.routes.ts', {
  './admin.guard': { adminGuard },
  './legal-content': { LEGAL_PAGES }
});
assert.deepEqual(routes.map(route => route.path), ['', 'login', 'admin', 'privacidad', 'cookies', 'aviso-legal', 'condiciones', '**']);
assert.equal(routes[0].pathMatch, 'full');
assert.deepEqual(routes[2].canActivate, [adminGuard]);
assert.equal(routes.at(-1).redirectTo, '');
for (const route of routes.slice(0, -1)) {
  assert.equal(typeof route.loadComponent, 'function');
  assert.ok(route.title);
}
for (const [path, page] of Object.entries(LEGAL_PAGES)) {
  const route = routes.find(route => route.path === path);
  assert.equal(route.data.page, page);
  assert.equal(route.canActivate, undefined, 'Legal pages must be public');
  assert.ok(page.sections.length >= 3);
}
const footer = await readFile(new URL('../src/app/site-footer.component.html', import.meta.url), 'utf8');
const store = await readFile(new URL('../src/app/app.component.html', import.meta.url), 'utf8');
for (const [, url] of footer.matchAll(/routerLink="([^"]+)"/g)) {
  assert.ok(routes.some(route => '/' + route.path === url), 'Footer route exists: ' + url);
}
for (const [, fragment] of footer.matchAll(/fragment="([^"]+)"/g)) {
  assert.ok(store.includes('id="' + fragment + '"'), 'Footer fragment exists: ' + fragment);
}
for (const path of Object.keys(LEGAL_PAGES)) assert.ok(footer.includes('routerLink="/' + path + '"'));
assert.ok(!store.includes('Compra de demostración'));
assert.ok(store.includes('Pago simulado'), 'The checkout must remain transparent about simulated payments');
console.log('OK: footer, destinos de navegación y cuatro páginas legales públicas.');
const originalFetch = globalThis.fetch;
const response = (status, body = {}) => ({ status, ok: status >= 200 && status < 300, json: async () => body });
try {
  for (const status of [401, 403, 500]) {
    auth.isAdmin.set(true); // Cached UI state must never grant access.
    globalThis.fetch = async (url, options) => {
      assert.equal(url, '/api/admin/session');
      assert.equal(options.cache, 'no-store');
      return response(status);
    };
    assert.deepEqual(await adminGuard(), { commands: ['/login'] });
    assert.equal(auth.isAdmin(), false);
  }
  globalThis.fetch = async () => response(200, { ok: false });
  assert.deepEqual(await adminGuard(), { commands: ['/login'] });
  globalThis.fetch = async () => { throw Error('offline'); };
  assert.deepEqual(await adminGuard(), { commands: ['/login'] });
  globalThis.fetch = async () => response(200, { ok: true });
  assert.equal(await adminGuard(), true);

  let finish;
  globalThis.fetch = () => new Promise(resolve => { finish = resolve; });
  const pendingGuard = adminGuard();
  auth.clearSession();
  finish(response(200, { ok: true }));
  assert.deepEqual(await pendingGuard, { commands: ['/login'] });

  // A background refresh may start while the guard is still awaiting its request.
  auth.isAdmin.set(true);
  let finishGuard;
  let finishRefresh;
  globalThis.fetch = () => new Promise(resolve => { finishGuard = resolve; });
  const supersededGuard = adminGuard();
  globalThis.fetch = () => new Promise(resolve => { finishRefresh = resolve; });
  const newerRefresh = auth.refresh();
  finishGuard(response(401));
  assert.deepEqual(await supersededGuard, { commands: ['/login'] });
  finishRefresh(response(401));
  await newerRefresh;
  console.log('OK: rutas lazy, ruta desconocida y guard con sesión válida, caducada, sin conexión y respuestas tardías.');

  const { AdminComponent } = await load('admin.component.ts', {
    ...dependencies,
    '@angular/common': { CommonModule: class {} },
    '@angular/forms': { FormsModule: class {} }
  });
  globalThis.fetch = async url => {
    if (url.endsWith('/session')) return response(200, { ok: true });
    if (url.endsWith('/products')) return response(200, []);
    return response(200, { orders: [], hasMore: false });
  };
  const admin = new AdminComponent();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(admin.authenticated(), true);
  auth.isAdmin.set(true);
  globalThis.fetch = async () => response(401, { error: 'Sesión caducada' });
  await admin.revalidate();
  assert.deepEqual(redirects, ['/login']);
  assert.equal(auth.isAdmin(), false);
  assert.deepEqual(admin.products(), []);

  redirects.length = 0;
  auth.isAdmin.set(true);
  admin.authenticated.set(true);
  globalThis.fetch = async () => response(500);
  await admin.logout();
  assert.deepEqual(redirects, []);
  assert.equal(auth.isAdmin(), true, 'A failed logout must not clear authentication');
  globalThis.fetch = async (url, options) => {
    assert.equal(url, '/api/admin/logout');
    assert.equal(options.method, 'POST');
    return response(200);
  };
  await admin.logout();
  assert.deepEqual(redirects, ['/']);
  assert.equal(auth.isAdmin(), false);

  redirects.length = 0;
  destroyRef.destroyed = true;
  globalThis.fetch = async () => response(401);
  await assert.rejects(() => admin.api('/session'));
  assert.deepEqual(redirects, [], 'An old admin request must not navigate after leaving the page');
  console.log('OK: administración redirige por Router al caducar o cerrar sesión, sin recargar la página.');
} finally {
  globalThis.fetch = originalFetch;
}
