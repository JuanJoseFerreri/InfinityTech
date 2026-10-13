import { Component, DestroyRef, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
interface EditableProduct { id:number; name:string; description:string; price_cents:number; stock:number; revision:number; price:number; }
interface Order { id:string; customer_name:string; email:string; address:string; total_cents:number; status:string; created_at:string; items:{name:string; quantity:number; price_cents:number}[]; }
@Component({
 selector:'app-admin', standalone:true, imports:[CommonModule,FormsModule,RouterLink],
 templateUrl:'./admin.component.html', styleUrl:'./admin.component.css'
})
export class AdminComponent {
 private readonly router=inject(Router);
 private readonly auth=inject(AuthService);
 private readonly destroyRef=inject(DestroyRef);
 authenticated=signal(false); checking=signal(true); busy=signal(false);
 error=signal(''); notice=signal(''); products=signal<EditableProduct[]>([]);
 orders=signal<Order[]>([]); hasMore=signal(false); page=signal(1);
 constructor() { void this.check(); }
 @HostListener('window:focus')
 async revalidate():Promise<void>{
  if(this.checking() || !this.authenticated())return;
  try{await this.api('/session');}
  catch(e){this.error.set(e instanceof Error?e.message:'No se pudo comprobar la sesión.');}
 }
 @HostListener('window:pageshow',['$event'])
 restore(event:PageTransitionEvent):void{if(event.persisted)void this.revalidate();}
 private async api(path:string, method='GET', body?:unknown):Promise<any> {
  const response=await fetch('/api/admin'+path,{
   method, headers:{'Content-Type':'application/json','X-Admin-Request':'1'},
   body:body===undefined?undefined:JSON.stringify(body)
  });
  const result=await response.json();
  if (!response.ok) {
   if((response.status===401 || response.status===403) && !this.destroyRef.destroyed){
    this.auth.clearSession();this.authenticated.set(false);this.products.set([]);this.orders.set([]);
    await this.router.navigateByUrl('/login',{replaceUrl:true});
   }
   throw new Error(result.error || 'No se pudo completar la operación.');
  }
  return result;
 }
 private async run(action:()=>Promise<void>):Promise<void>{
  if(this.busy())return;this.busy.set(true);this.error.set('');this.notice.set('');
  try {await action();} catch(e){this.error.set(e instanceof Error?e.message:'Error de conexión.');}
  finally{this.busy.set(false);}
 }
 private async check():Promise<void>{
  try{await this.api('/session');this.authenticated.set(true);await this.refresh();}
  catch(e){this.error.set(e instanceof Error?e.message:'Error de conexión.');}
  finally{this.checking.set(false);}
 }
 async logout():Promise<void>{await this.run(async()=>{
  await this.auth.logout();this.authenticated.set(false);this.products.set([]);this.orders.set([]);
  if(!this.destroyRef.destroyed)await this.router.navigateByUrl('/',{replaceUrl:true});
 });}
 private async refresh():Promise<void>{
  const products=await this.api('/products');
  this.products.set(products.map((p:EditableProduct)=>({...p,price:p.price_cents/100})));
  await this.fetchOrders();
 }
 async reload():Promise<void>{await this.run(()=>this.refresh());}
 async save(p:EditableProduct):Promise<void>{await this.run(async()=>{
  if(!p.name.trim() || !Number.isFinite(p.price) || p.price<=0 || !Number.isInteger(p.stock)||p.stock<0)
   throw new Error('Revisa el nombre, precio y stock.');
  await this.api('/products/'+p.id,'PUT',{
   name:p.name,description:p.description,price_cents:Math.round(p.price*100),stock:p.stock,revision:p.revision
  });await this.refresh();this.notice.set('Producto guardado.');
 });}
 private async fetchOrders():Promise<void>{
  const result=await this.api('/orders?page='+this.page());
  this.orders.set(result.orders);this.hasMore.set(result.hasMore);
 }
 async changePage(delta:number):Promise<void>{await this.run(async()=>{
  this.page.update(p=>Math.max(1,p+delta));await this.fetchOrders();
 });}
 async setStatus(order:Order,status:'paid'|'cancelled'):Promise<void>{
  if(!window.confirm(status==='cancelled'?'¿Cancelar el pedido y devolver sus unidades al stock?':'¿Confirmas que has recibido el pago? Esta acción no realiza ningún cobro.'))return;
  await this.run(async()=>{await this.api('/orders/'+order.id,'PATCH',{status});await this.refresh();this.notice.set('Pedido actualizado.');});
 }
 label(status:string):string{return ({pending:'Pendiente',paid:'Pagado',cancelled:'Cancelado'} as Record<string,string>)[status]??status;}
}
