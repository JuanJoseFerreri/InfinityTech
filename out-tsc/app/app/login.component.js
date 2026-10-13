import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hasAdminSession } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function LoginComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1, "Comprobando sesi\u00F3n\u2026");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_14_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function LoginComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 9, 0);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_Conditional_14_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.login()); });
    i0.ɵɵelementStart(2, "label", 10);
    i0.ɵɵtext(3, "Correo electr\u00F3nico");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 11);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Conditional_14_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "label", 12);
    i0.ɵɵtext(6, "Contrase\u00F1a");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Conditional_14_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, LoginComponent_Conditional_14_Conditional_8_Template, 2, 1, "p", 14);
    i0.ɵɵelementStart(9, "button", 15);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const loginForm_r3 = i0.ɵɵreference(1);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.email);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.password);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy() || loginForm_r3.invalid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.busy() ? "Entrando\u2026" : "Iniciar sesi\u00F3n");
} }
export class LoginComponent {
    checking = signal(true, ...(ngDevMode ? [{ debugName: "checking" }] : []));
    busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : []));
    email = '';
    password = '';
    constructor() { void this.check(); }
    async check() {
        try {
            if (await hasAdminSession())
                window.location.replace('/');
        }
        catch {
            this.error.set('No se pudo comprobar la sesión. Comprueba la conexión e inténtalo de nuevo.');
        }
        finally {
            this.checking.set(false);
        }
    }
    async login() {
        if (this.busy() || !this.email.trim() || !this.password)
            return;
        this.busy.set(true);
        this.error.set('');
        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST', credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json', 'X-Admin-Request': '1' },
                body: JSON.stringify({ email: this.email.trim(), password: this.password })
            });
            if (response.status === 429)
                throw new Error('Demasiados intentos. Espera 15 minutos antes de volver a intentarlo.');
            if (response.status === 400 || response.status === 401)
                throw new Error('Correo o contraseña incorrectos.');
            if (!response.ok)
                throw new Error('No se pudo iniciar sesión. Inténtalo de nuevo.');
            if (!await hasAdminSession())
                throw new Error('No se pudo validar la sesión. Revisa que las cookies estén habilitadas.');
            window.location.replace('/');
        }
        catch (error) {
            this.error.set(error instanceof Error ? error.message : 'No se pudo conectar con el servidor.');
        }
        finally {
            this.password = '';
            this.busy.set(false);
        }
    }
    static ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-root"]], decls: 17, vars: 1, consts: [["loginForm", "ngForm"], ["href", "/", 1, "brand"], ["href", "/"], ["aria-labelledby", "login-title", 1, "login-card"], [1, "eyebrow"], ["id", "login-title"], [1, "intro"], ["role", "status"], [1, "help"], [3, "ngSubmit"], ["for", "login-email"], ["id", "login-email", "name", "email", "type", "email", "autocomplete", "username", "required", "", "email", "", "maxlength", "254", 3, "ngModelChange", "ngModel", "disabled"], ["for", "login-password"], ["id", "login-password", "name", "password", "type", "password", "autocomplete", "current-password", "required", "", "maxlength", "128", 3, "ngModelChange", "ngModel", "disabled"], ["role", "alert", 1, "error"], ["type", "submit", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header")(1, "a", 1);
            i0.ɵɵtext(2, "tecnom\u00F3vil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 2);
            i0.ɵɵtext(4, "\u2190 Volver a la tienda");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "main")(6, "section", 3)(7, "p", 4);
            i0.ɵɵtext(8, "TU CUENTA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "h1", 5);
            i0.ɵɵtext(10, "Iniciar sesi\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p", 6);
            i0.ɵɵtext(12, "Introduce los datos de tu cuenta para continuar.");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(13, LoginComponent_Conditional_13_Template, 2, 0, "p", 7)(14, LoginComponent_Conditional_14_Template, 11, 7, "form");
            i0.ɵɵelementStart(15, "p", 8);
            i0.ɵɵtext(16, "Acceso para cuentas autorizadas. Puedes explorar la tienda y comprar sin iniciar sesi\u00F3n.");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(13);
            i0.ɵɵconditional(ctx.checking() ? 13 : 14);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.EmailValidator, i1.NgModel, i1.NgForm], styles: ["[_nghost-%COMP%]{display:block;min-height:100dvh;background:#f8f8f6;color:#172033}\n*[_ngcontent-%COMP%]{box-sizing:border-box}\nheader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:24px max(5vw,20px);background:white;border-bottom:1px solid #e5e7e9}\na[_ngcontent-%COMP%]{color:#6656bf;text-underline-offset:4px;font-size:14px}\n.brand[_ngcontent-%COMP%]{font-size:24px;font-weight:800;letter-spacing:-.04em;color:#172033;text-decoration:none}\nmain[_ngcontent-%COMP%]{display:grid;place-items:center;padding:64px 20px}\n.login-card[_ngcontent-%COMP%]{width:min(100%,440px);padding:36px;border:1px solid #e5e7e9;border-radius:20px;background:#fff;box-shadow:0 16px 48px #17203308}\n.eyebrow[_ngcontent-%COMP%]{font-size:12px;font-weight:800;letter-spacing:.12em;color:#7664d6;margin:0 0 12px}\nh1[_ngcontent-%COMP%]{font-size:32px;line-height:1.15;letter-spacing:-.03em;margin:0 0 16px;font-weight:800}\n.intro[_ngcontent-%COMP%]{font-size:16px;line-height:1.5;color:#606776;margin-bottom:28px}\nlabel[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:700;margin:18px 0 8px}\ninput[_ngcontent-%COMP%]{width:100%;border:1px solid #cbd0d9;border-radius:9px;padding:12px;font:inherit;min-height:46px}\nbutton[_ngcontent-%COMP%]{width:100%;margin-top:24px;min-height:48px;padding:12px;border:0;border-radius:9px;background:#172033;color:white;font:inherit;font-weight:800;cursor:pointer}\nbutton[_ngcontent-%COMP%]:disabled{opacity:.55;cursor:not-allowed}\n[_ngcontent-%COMP%]:is(a,button,input):focus-visible{outline:3px solid #7966dc;outline-offset:3px}\n.error[_ngcontent-%COMP%]{padding:12px;background:#fff0f0;color:#a32237;border-radius:8px;font-size:14px;line-height:1.5}\n.help[_ngcontent-%COMP%]{margin:24px 0 0;color:#606776;font-size:14px;line-height:1.5}\n@media(max-width:480px){main[_ngcontent-%COMP%]{padding:32px 16px}.login-card[_ngcontent-%COMP%]{padding:28px 22px}header[_ngcontent-%COMP%]{flex-wrap:wrap}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [FormsModule], template: "<header><a class=\"brand\" href=\"/\">tecnom\u00F3vil</a><a href=\"/\">\u2190 Volver a la tienda</a></header>\n<main>\n  <section class=\"login-card\" aria-labelledby=\"login-title\">\n    <p class=\"eyebrow\">TU CUENTA</p>\n    <h1 id=\"login-title\">Iniciar sesi\u00F3n</h1>\n    <p class=\"intro\">Introduce los datos de tu cuenta para continuar.</p>\n    @if (checking()) { <p role=\"status\">Comprobando sesi\u00F3n\u2026</p> }\n    @else {\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n        <label for=\"login-email\">Correo electr\u00F3nico</label>\n        <input id=\"login-email\" name=\"email\" type=\"email\" autocomplete=\"username\" required email maxlength=\"254\" [(ngModel)]=\"email\" [disabled]=\"busy()\">\n        <label for=\"login-password\">Contrase\u00F1a</label>\n        <input id=\"login-password\" name=\"password\" type=\"password\" autocomplete=\"current-password\" required maxlength=\"128\" [(ngModel)]=\"password\" [disabled]=\"busy()\">\n        @if (error()) { <p class=\"error\" role=\"alert\">{{ error() }}</p> }\n        <button type=\"submit\" [disabled]=\"busy() || loginForm.invalid\">{{ busy() ? 'Entrando\u2026' : 'Iniciar sesi\u00F3n' }}</button>\n      </form>\n    }\n    <p class=\"help\">Acceso para cuentas autorizadas. Puedes explorar la tienda y comprar sin iniciar sesi\u00F3n.</p>\n  </section>\n</main>\n", styles: [":host{display:block;min-height:100dvh;background:#f8f8f6;color:#172033}\n*{box-sizing:border-box}\nheader{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:24px max(5vw,20px);background:white;border-bottom:1px solid #e5e7e9}\na{color:#6656bf;text-underline-offset:4px;font-size:14px}\n.brand{font-size:24px;font-weight:800;letter-spacing:-.04em;color:#172033;text-decoration:none}\nmain{display:grid;place-items:center;padding:64px 20px}\n.login-card{width:min(100%,440px);padding:36px;border:1px solid #e5e7e9;border-radius:20px;background:#fff;box-shadow:0 16px 48px #17203308}\n.eyebrow{font-size:12px;font-weight:800;letter-spacing:.12em;color:#7664d6;margin:0 0 12px}\nh1{font-size:32px;line-height:1.15;letter-spacing:-.03em;margin:0 0 16px;font-weight:800}\n.intro{font-size:16px;line-height:1.5;color:#606776;margin-bottom:28px}\nlabel{display:block;font-size:14px;font-weight:700;margin:18px 0 8px}\ninput{width:100%;border:1px solid #cbd0d9;border-radius:9px;padding:12px;font:inherit;min-height:46px}\nbutton{width:100%;margin-top:24px;min-height:48px;padding:12px;border:0;border-radius:9px;background:#172033;color:white;font:inherit;font-weight:800;cursor:pointer}\nbutton:disabled{opacity:.55;cursor:not-allowed}\n:is(a,button,input):focus-visible{outline:3px solid #7966dc;outline-offset:3px}\n.error{padding:12px;background:#fff0f0;color:#a32237;border-radius:8px;font-size:14px;line-height:1.5}\n.help{margin:24px 0 0;color:#606776;font-size:14px;line-height:1.5}\n@media(max-width:480px){main{padding:32px 16px}.login-card{padding:28px 22px}header{flex-wrap:wrap}}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/login.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=login.component.js.map