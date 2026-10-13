import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.id;
function AdminComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function AdminComponent_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(1, "Cerrar sesi\u00F3n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.busy());
} }
function AdminComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AdminComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.notice());
} }
function AdminComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, "Comprobando sesi\u00F3n\u2026");
    i0.ɵɵelementEnd();
} }
function AdminComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No se pudo validar el acceso. ");
    i0.ɵɵelementStart(2, "a", 7);
    i0.ɵɵtext(3, "Ir a iniciar sesi\u00F3n");
    i0.ɵɵelementEnd()();
} }
function AdminComponent_Conditional_11_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 11, 0);
    i0.ɵɵlistener("ngSubmit", function AdminComponent_Conditional_11_For_9_Template_form_ngSubmit_0_listener() { const p_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.save(p_r5)); });
    i0.ɵɵelementStart(2, "label");
    i0.ɵɵtext(3, "Nombre");
    i0.ɵɵelementStart(4, "input", 12);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminComponent_Conditional_11_For_9_Template_input_ngModelChange_4_listener($event) { const p_r5 = i0.ɵɵrestoreView(_r4).$implicit; i0.ɵɵtwoWayBindingSet(p_r5.name, $event) || (p_r5.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label");
    i0.ɵɵtext(6, "Descripci\u00F3n");
    i0.ɵɵelementStart(7, "textarea", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminComponent_Conditional_11_For_9_Template_textarea_ngModelChange_7_listener($event) { const p_r5 = i0.ɵɵrestoreView(_r4).$implicit; i0.ɵɵtwoWayBindingSet(p_r5.description, $event) || (p_r5.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 14)(9, "label");
    i0.ɵɵtext(10, "Precio (\u20AC)");
    i0.ɵɵelementStart(11, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminComponent_Conditional_11_For_9_Template_input_ngModelChange_11_listener($event) { const p_r5 = i0.ɵɵrestoreView(_r4).$implicit; i0.ɵɵtwoWayBindingSet(p_r5.price, $event) || (p_r5.price = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "label");
    i0.ɵɵtext(13, "Stock");
    i0.ɵɵelementStart(14, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminComponent_Conditional_11_For_9_Template_input_ngModelChange_14_listener($event) { const p_r5 = i0.ɵɵrestoreView(_r4).$implicit; i0.ɵɵtwoWayBindingSet(p_r5.stock, $event) || (p_r5.stock = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "button", 2);
    i0.ɵɵtext(16, "Guardar producto");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const productForm_r6 = i0.ɵɵreference(1);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", p_r5.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", p_r5.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", p_r5.price);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", p_r5.stock);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy() || productForm_r6.invalid);
} }
function AdminComponent_Conditional_11_For_13_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", item_r7.quantity, " \u00D7 ", item_r7.name, " \u00B7 ", i0.ɵɵpipeBind2(2, 3, item_r7.price_cents / 100, "EUR"));
} }
function AdminComponent_Conditional_11_For_13_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 6);
    i0.ɵɵlistener("click", function AdminComponent_Conditional_11_For_13_Conditional_19_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const order_r9 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setStatus(order_r9, "paid")); });
    i0.ɵɵtext(2, "Marcar pagado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 19);
    i0.ɵɵlistener("click", function AdminComponent_Conditional_11_For_13_Conditional_19_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); const order_r9 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setStatus(order_r9, "cancelled")); });
    i0.ɵɵtext(4, "Cancelar y reponer stock");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
} }
function AdminComponent_Conditional_11_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "div", 8)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 17);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 18);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelement(11, "br");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "ul");
    i0.ɵɵrepeaterCreate(14, AdminComponent_Conditional_11_For_13_For_15_Template, 3, 6, "li", null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(19, AdminComponent_Conditional_11_For_13_Conditional_19_Template, 5, 2, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const order_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(order_r9.customer_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.label(order_r9.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", order_r9.id, " \u00B7 ", i0.ɵɵpipeBind2(8, 8, order_r9.created_at, "dd/MM/yyyy HH:mm"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(order_r9.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r9.address);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(order_r9.items);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Total: ", i0.ɵɵpipeBind2(18, 11, order_r9.total_cents / 100, "EUR"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(order_r9.status === "pending" ? 19 : -1);
} }
function AdminComponent_Conditional_11_ForEmpty_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No hay pedidos en esta p\u00E1gina.");
    i0.ɵɵelementEnd();
} }
function AdminComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "h2");
    i0.ɵɵtext(2, "Productos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 6);
    i0.ɵɵlistener("click", function AdminComponent_Conditional_11_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.reload()); });
    i0.ɵɵtext(4, "Recargar datos");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Precio en euros. El stock representa unidades disponibles.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵrepeaterCreate(8, AdminComponent_Conditional_11_For_9_Template, 17, 5, "form", null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h2");
    i0.ɵɵtext(11, "Pedidos");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(12, AdminComponent_Conditional_11_For_13_Template, 20, 14, "article", null, _forTrack0, false, AdminComponent_Conditional_11_ForEmpty_14_Template, 2, 0, "p");
    i0.ɵɵelementStart(15, "div", 10)(16, "button", 6);
    i0.ɵɵlistener("click", function AdminComponent_Conditional_11_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changePage(-1)); });
    i0.ɵɵtext(17, "Anterior");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 6);
    i0.ɵɵlistener("click", function AdminComponent_Conditional_11_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changePage(1)); });
    i0.ɵɵtext(21, "Siguiente");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.products());
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.orders());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.busy() || ctx_r1.page() === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("P\u00E1gina ", ctx_r1.page());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy() || !ctx_r1.hasMore());
} }
export class AdminComponent {
    authenticated = signal(false, ...(ngDevMode ? [{ debugName: "authenticated" }] : []));
    checking = signal(true, ...(ngDevMode ? [{ debugName: "checking" }] : []));
    busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : []));
    notice = signal('', ...(ngDevMode ? [{ debugName: "notice" }] : []));
    products = signal([], ...(ngDevMode ? [{ debugName: "products" }] : []));
    orders = signal([], ...(ngDevMode ? [{ debugName: "orders" }] : []));
    hasMore = signal(false, ...(ngDevMode ? [{ debugName: "hasMore" }] : []));
    page = signal(1, ...(ngDevMode ? [{ debugName: "page" }] : []));
    constructor() { void this.check(); }
    async revalidate() {
        if (this.checking() || !this.authenticated())
            return;
        try {
            await this.api('/session');
        }
        catch (e) {
            this.error.set(e instanceof Error ? e.message : 'No se pudo comprobar la sesión.');
        }
    }
    restore(event) { if (event.persisted)
        void this.revalidate(); }
    async api(path, method = 'GET', body) {
        const response = await fetch('/api/admin' + path, {
            method, headers: { 'Content-Type': 'application/json', 'X-Admin-Request': '1' },
            body: body === undefined ? undefined : JSON.stringify(body)
        });
        const result = await response.json();
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                this.authenticated.set(false);
                this.products.set([]);
                this.orders.set([]);
                window.location.replace('/login');
            }
            throw new Error(result.error || 'No se pudo completar la operación.');
        }
        return result;
    }
    async run(action) {
        if (this.busy())
            return;
        this.busy.set(true);
        this.error.set('');
        this.notice.set('');
        try {
            await action();
        }
        catch (e) {
            this.error.set(e instanceof Error ? e.message : 'Error de conexión.');
        }
        finally {
            this.busy.set(false);
        }
    }
    async check() {
        try {
            await this.api('/session');
            this.authenticated.set(true);
            await this.refresh();
        }
        catch (e) {
            if (this.authenticated())
                this.error.set(e instanceof Error ? e.message : 'Error de conexión.');
        }
        finally {
            this.checking.set(false);
        }
    }
    async logout() {
        await this.run(async () => {
            await this.api('/logout', 'POST');
            this.authenticated.set(false);
            this.products.set([]);
            this.orders.set([]);
            window.location.replace('/');
        });
    }
    async refresh() {
        const products = await this.api('/products');
        this.products.set(products.map((p) => ({ ...p, price: p.price_cents / 100 })));
        await this.fetchOrders();
    }
    async reload() { await this.run(() => this.refresh()); }
    async save(p) {
        await this.run(async () => {
            if (!p.name.trim() || !Number.isFinite(p.price) || p.price <= 0 || !Number.isInteger(p.stock) || p.stock < 0)
                throw new Error('Revisa el nombre, precio y stock.');
            await this.api('/products/' + p.id, 'PUT', {
                name: p.name, description: p.description, price_cents: Math.round(p.price * 100), stock: p.stock, revision: p.revision
            });
            await this.refresh();
            this.notice.set('Producto guardado.');
        });
    }
    async fetchOrders() {
        const result = await this.api('/orders?page=' + this.page());
        this.orders.set(result.orders);
        this.hasMore.set(result.hasMore);
    }
    async changePage(delta) {
        await this.run(async () => {
            this.page.update(p => Math.max(1, p + delta));
            await this.fetchOrders();
        });
    }
    async setStatus(order, status) {
        if (!window.confirm(status === 'cancelled' ? '¿Cancelar el pedido y devolver sus unidades al stock?' : '¿Confirmas que has recibido el pago? Esta acción no realiza ningún cobro.'))
            return;
        await this.run(async () => { await this.api('/orders/' + order.id, 'PATCH', { status }); await this.refresh(); this.notice.set('Pedido actualizado.'); });
    }
    label(status) { return { pending: 'Pendiente', paid: 'Pagado', cancelled: 'Cancelado' }[status] ?? status; }
    static ɵfac = function AdminComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminComponent, selectors: [["app-root"]], hostBindings: function AdminComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("focus", function AdminComponent_focus_HostBindingHandler() { return ctx.revalidate(); }, i0.ɵɵresolveWindow)("pageshow", function AdminComponent_pageshow_HostBindingHandler($event) { return ctx.restore($event); }, i0.ɵɵresolveWindow);
        } }, decls: 12, vars: 4, consts: [["productForm", "ngForm"], ["href", "/"], [3, "disabled"], ["role", "alert", 1, "error"], ["role", "status", 1, "success"], ["role", "status"], [3, "click", "disabled"], ["href", "/login"], [1, "section-title"], [1, "products"], [1, "actions"], [3, "ngSubmit"], ["name", "name", "required", "", "minlength", "2", "maxlength", "150", 3, "ngModelChange", "ngModel"], ["name", "description", "required", "", "minlength", "3", "maxlength", "1000", 3, "ngModelChange", "ngModel"], [1, "row"], ["name", "price", "type", "number", "step", "0.01", "min", "0.01", "max", "100000", "required", "", 3, "ngModelChange", "ngModel"], ["name", "stock", "type", "number", "step", "1", "min", "0", "max", "100000", "required", "", 3, "ngModelChange", "ngModel"], [1, "badge"], [1, "reference"], [1, "danger", 3, "click", "disabled"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header")(1, "a", 1);
            i0.ɵɵtext(2, "\u2190 Volver a la tienda");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h1");
            i0.ɵɵtext(4, "Administraci\u00F3n \u00B7 TecnoM\u00F3vil");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, AdminComponent_Conditional_5_Template, 2, 1, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "main");
            i0.ɵɵconditionalCreate(7, AdminComponent_Conditional_7_Template, 2, 1, "p", 3);
            i0.ɵɵconditionalCreate(8, AdminComponent_Conditional_8_Template, 2, 1, "p", 4);
            i0.ɵɵconditionalCreate(9, AdminComponent_Conditional_9_Template, 2, 0, "p", 5)(10, AdminComponent_Conditional_10_Template, 4, 0, "p")(11, AdminComponent_Conditional_11_Template, 22, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.authenticated() ? 5 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.error() ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.notice() ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.checking() ? 9 : !ctx.authenticated() ? 10 : 11);
        } }, dependencies: [CommonModule, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, i1.NgForm, i2.CurrencyPipe, i2.DatePipe], styles: ["[_nghost-%COMP%]{display:block;color:#172033;background:#f8f8f6;min-height:100vh;font-family:var(--font-ui)}*[_ngcontent-%COMP%]{box-sizing:border-box}header[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{max-width:1100px;margin:auto;padding:24px}header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px;flex-wrap:wrap}h1[_ngcontent-%COMP%]{font-size:22px;flex:1}a[_ngcontent-%COMP%]{color:#6656bf}h2[_ngcontent-%COMP%]{font-size:24px}form[_ngcontent-%COMP%], article[_ngcontent-%COMP%]{padding:24px;background:white;border:1px solid #ddd;border-radius:12px;margin-bottom:20px}.login[_ngcontent-%COMP%]{max-width:430px;margin:40px auto}.products[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}label[_ngcontent-%COMP%]{display:block;font-size:14px;margin-bottom:16px}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;display:block;margin-top:8px;padding:12px;border:1px solid #aaa;border-radius:6px;font:inherit}textarea[_ngcontent-%COMP%]{min-height:85px;resize:vertical}button[_ngcontent-%COMP%]{background:#172033;color:white;border:0;padding:12px 18px;border-radius:7px;cursor:pointer;font:inherit}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.row[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%], .section-title[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:center;flex-wrap:wrap}.row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex:1}.section-title[_ngcontent-%COMP%]{justify-content:space-between}.actions[_ngcontent-%COMP%]{margin-top:20px}.danger[_ngcontent-%COMP%]{background:#973341}.error[_ngcontent-%COMP%]{background:#ffe5e5;padding:16px;border-radius:8px;color:#90212b}.success[_ngcontent-%COMP%]{background:#e1f5d4;padding:16px;border-radius:8px}.reference[_ngcontent-%COMP%]{font-size:12px;overflow-wrap:anywhere;color:#606777}.badge[_ngcontent-%COMP%]{background:#e8e5ff;padding:8px;border-radius:5px}li[_ngcontent-%COMP%]{margin:8px 0}@media(max-width:650px){.products[_ngcontent-%COMP%]{grid-template-columns:1fr}header[_ngcontent-%COMP%], main[_ngcontent-%COMP%]{padding:16px}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule], template: "<header><a href=\"/\">\u2190 Volver a la tienda</a><h1>Administraci\u00F3n \u00B7 TecnoM\u00F3vil</h1>\n@if(authenticated()){<button (click)=\"logout()\" [disabled]=\"busy()\">Cerrar sesi\u00F3n</button>}</header>\n<main>\n@if(error()){<p role=\"alert\" class=\"error\">{{error()}}</p>}\n@if(notice()){<p role=\"status\" class=\"success\">{{notice()}}</p>}\n@if(checking()){<p role=\"status\">Comprobando sesi\u00F3n\u2026</p>}\n@else if(!authenticated()){\n <p>No se pudo validar el acceso. <a href=\"/login\">Ir a iniciar sesi\u00F3n</a></p>\n}@else{\n <div class=\"section-title\"><h2>Productos</h2><button (click)=\"reload()\" [disabled]=\"busy()\">Recargar datos</button></div>\n <p>Precio en euros. El stock representa unidades disponibles.</p>\n <div class=\"products\">@for(p of products();track p.id){\n <form #productForm=\"ngForm\" (ngSubmit)=\"save(p)\">\n <label>Nombre<input name=\"name\" [(ngModel)]=\"p.name\" required minlength=\"2\" maxlength=\"150\"></label>\n <label>Descripci\u00F3n<textarea name=\"description\" [(ngModel)]=\"p.description\" required minlength=\"3\" maxlength=\"1000\"></textarea></label>\n <div class=\"row\"><label>Precio (\u20AC)<input name=\"price\" type=\"number\" step=\"0.01\" min=\"0.01\" max=\"100000\" required [(ngModel)]=\"p.price\"></label>\n <label>Stock<input name=\"stock\" type=\"number\" step=\"1\" min=\"0\" max=\"100000\" required [(ngModel)]=\"p.stock\"></label></div>\n <button [disabled]=\"busy() || productForm.invalid\">Guardar producto</button>\n </form>}\n </div>\n <h2>Pedidos</h2>\n @for(order of orders();track order.id){\n <article>\n <div class=\"section-title\"><strong>{{order.customer_name}}</strong><span class=\"badge\">{{label(order.status)}}</span></div>\n <p class=\"reference\">{{order.id}} \u00B7 {{order.created_at | date:'dd/MM/yyyy HH:mm'}}</p>\n <p>{{order.email}}<br>{{order.address}}</p>\n <ul>@for(item of order.items;track $index){<li>{{item.quantity}} \u00D7 {{item.name}} \u00B7 {{item.price_cents/100 | currency:'EUR'}}</li>}</ul>\n <strong>Total: {{order.total_cents/100 | currency:'EUR'}}</strong>\n @if(order.status==='pending'){<div class=\"actions\">\n <button (click)=\"setStatus(order,'paid')\" [disabled]=\"busy()\">Marcar pagado</button>\n <button class=\"danger\" (click)=\"setStatus(order,'cancelled')\" [disabled]=\"busy()\">Cancelar y reponer stock</button>\n </div>}\n </article>\n }@empty{<p>No hay pedidos en esta p\u00E1gina.</p>}\n <div class=\"actions\"><button (click)=\"changePage(-1)\" [disabled]=\"busy() || page()===1\">Anterior</button>\n <span>P\u00E1gina {{page()}}</span><button (click)=\"changePage(1)\" [disabled]=\"busy() || !hasMore()\">Siguiente</button></div>\n}\n</main>\n", styles: [":host{display:block;color:#172033;background:#f8f8f6;min-height:100vh;font-family:var(--font-ui)}*{box-sizing:border-box}header,main{max-width:1100px;margin:auto;padding:24px}header{display:flex;align-items:center;gap:24px;flex-wrap:wrap}h1{font-size:22px;flex:1}a{color:#6656bf}h2{font-size:24px}form,article{padding:24px;background:white;border:1px solid #ddd;border-radius:12px;margin-bottom:20px}.login{max-width:430px;margin:40px auto}.products{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}label{display:block;font-size:14px;margin-bottom:16px}input,textarea{width:100%;display:block;margin-top:8px;padding:12px;border:1px solid #aaa;border-radius:6px;font:inherit}textarea{min-height:85px;resize:vertical}button{background:#172033;color:white;border:0;padding:12px 18px;border-radius:7px;cursor:pointer;font:inherit}button:disabled{opacity:.5;cursor:not-allowed}.row,.actions,.section-title{display:flex;gap:16px;align-items:center;flex-wrap:wrap}.row label{flex:1}.section-title{justify-content:space-between}.actions{margin-top:20px}.danger{background:#973341}.error{background:#ffe5e5;padding:16px;border-radius:8px;color:#90212b}.success{background:#e1f5d4;padding:16px;border-radius:8px}.reference{font-size:12px;overflow-wrap:anywhere;color:#606777}.badge{background:#e8e5ff;padding:8px;border-radius:5px}li{margin:8px 0}@media(max-width:650px){.products{grid-template-columns:1fr}header,main{padding:16px}}\n"] }]
    }], () => [], { revalidate: [{
            type: HostListener,
            args: ['window:focus']
        }], restore: [{
            type: HostListener,
            args: ['window:pageshow', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "app/admin.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=admin.component.js.map