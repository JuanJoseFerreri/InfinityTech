import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const source = await readFile(new URL('../src/app/auth.service.ts',import.meta.url),'utf8');
const compiled = ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,experimentalDecorators:true}}).outputText;
const core = {
  Injectable: () => target => target,
  signal: initial => { let value=initial; const get=()=>value; get.set=next=>{value=next;};return get; }
};
const module = {exports:{}};
new Function('require','module','exports',compiled)(name=>{assert.equal(name,'@angular/core');return core;},module,module.exports);
const {AuthService,hasAdminSession}=module.exports;
const originalFetch=globalThis.fetch;
const response=(status,body={})=>({status,ok:status>=200&&status<300,json:async()=>body});
try {
  const auth=new AuthService();
  assert.equal(auth.isAdmin(),false);
  globalThis.fetch=async()=>response(401);
  assert.equal(await hasAdminSession(),false);
  await auth.refresh();assert.equal(auth.isAdmin(),false);assert.equal(auth.checking(),false);
  globalThis.fetch=async()=>response(200,{ok:true});
  await auth.refresh();assert.equal(auth.isAdmin(),true);
  globalThis.fetch=async()=>response(200,{ok:false});
  await auth.refresh();assert.equal(auth.isAdmin(),false);
  globalThis.fetch=async()=>response(503);
  await auth.refresh();assert.equal(auth.isAdmin(),false);
  globalThis.fetch=async()=>{throw Error('offline');};
  await auth.refresh();assert.equal(auth.isAdmin(),false);
  // A stale session request must not restore admin navigation after logout.
  let finish;
  globalThis.fetch=()=>new Promise(resolve=>{finish=resolve;});
  const pending=auth.refresh();
  globalThis.fetch=async(url,options)=>{assert.equal(url,'/api/admin/logout');assert.equal(options.method,'POST');assert.equal(options.headers['X-Admin-Request'],'1');return response(200);};
  await auth.logout();finish(response(200,{ok:true}));await pending;
  assert.equal(auth.isAdmin(),false);
  globalThis.fetch=async()=>response(200,{ok:true});await auth.refresh();
  globalThis.fetch=async()=>response(500);await assert.rejects(()=>auth.logout());
  assert.equal(auth.isAdmin(),true,'Failed logout must not claim the session ended');
  globalThis.fetch=async()=>response(401);await auth.logout();assert.equal(auth.isAdmin(),false);
  console.log('OK: sesión válida, visitante, errores, cierre de sesión y respuestas fuera de orden.');
} finally {globalThis.fetch=originalFetch;}
// Login flow with simulated responses; never uses or changes a real account.
const loginSource=await readFile(new URL('../src/app/login.component.ts',import.meta.url),'utf8');
const loginCompiled=ts.transpileModule(loginSource,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,experimentalDecorators:true}}).outputText;
const loginModule={exports:{}};
let active=false;
let sessionCheck=async()=>active;
const redirects=[];
const router={navigateByUrl:async(path,options)=>{assert.equal(options.replaceUrl,true);redirects.push(path);return true;}};
const destroyRef={destroyed:false};
class Router {}
class DestroyRef {}
new Function('require','module','exports',loginCompiled)(name=>{
  if(name==='@angular/core')return {...core,Component:()=>target=>target,DestroyRef,inject:token=>{
    if(token===Router)return router;
    if(token===DestroyRef)return destroyRef;
    throw Error('Unexpected injection');
  }};
  if(name==='@angular/forms')return {FormsModule:class{}};
  if(name==='@angular/router')return {Router,RouterLink:class{}};
  if(name==='./auth.service')return {hasAdminSession:()=>sessionCheck()};
  throw Error(name);
},loginModule,loginModule.exports);
try{
  const login=new loginModule.exports.LoginComponent();
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(login.checking(),false);assert.deepEqual(redirects,[]);
  login.email='test@example.invalid';login.password='test-only';
  globalThis.fetch=async()=>response(401);await login.login();
  assert.equal(login.error(),'Correo o contraseña incorrectos.');assert.equal(login.password,'');assert.deepEqual(redirects,[]);
  login.password='test-only';globalThis.fetch=async()=>response(429);await login.login();
  assert.ok(login.error().includes('15 minutos'));assert.deepEqual(redirects,[]);
  login.password='test-only';globalThis.fetch=async()=>response(200);await login.login();
  assert.deepEqual(redirects,[],'A successful POST alone must not establish authentication');
  login.password='test-only';active=true;
  globalThis.fetch=async(url,options)=>{assert.equal(url,'/api/admin/login');assert.equal(options.headers['X-Admin-Request'],'1');return response(200);};
  await login.login();assert.deepEqual(redirects,['/']);assert.equal(login.password,'');
  redirects.length=0;
  new loginModule.exports.LoginComponent();
  await new Promise(resolve=>setImmediate(resolve));
  assert.deepEqual(redirects,['/'],'An existing session redirects through Angular Router');
  redirects.length=0;
  let finishCheck;
  sessionCheck=()=>new Promise(resolve=>{finishCheck=resolve;});
  new loginModule.exports.LoginComponent();
  destroyRef.destroyed=true;
  finishCheck(true);
  await new Promise(resolve=>setImmediate(resolve));
  assert.deepEqual(redirects,[],'Leaving login must prevent a stale response from navigating');
  console.log('OK: login incorrecto, límite de intentos y sesión validada antes de volver a la tienda.');
}finally{globalThis.fetch=originalFetch;}
if(process.argv.includes('--http')){
  for(const path of ['/session','/products','/orders']){
    const result=await fetch('http://localhost:4200/api/admin'+path);
    assert.equal(result.status,401,path+' debe rechazar visitantes sin sesión');
  }
  console.log('OK: la API rechaza el acceso anónimo a sesión, productos de administración y pedidos.');
}
