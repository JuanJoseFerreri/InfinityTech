import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
/** The server's HttpOnly session is the authority, never a localStorage flag. */
export async function hasAdminSession() {
    const response = await fetch('/api/admin/session', { credentials: 'same-origin', cache: 'no-store' });
    if (response.status === 401 || response.status === 403)
        return false;
    if (!response.ok)
        throw new Error('No se pudo comprobar la sesión. Inténtalo de nuevo.');
    const session = await response.json();
    return session.ok === true;
}
export class AuthService {
    isAdmin = signal(false, ...(ngDevMode ? [{ debugName: "isAdmin" }] : []));
    checking = signal(true, ...(ngDevMode ? [{ debugName: "checking" }] : []));
    revision = 0;
    async refresh() {
        const revision = ++this.revision;
        this.checking.set(true);
        try {
            const active = await hasAdminSession();
            if (revision === this.revision)
                this.isAdmin.set(active);
        }
        catch {
            if (revision === this.revision)
                this.isAdmin.set(false);
        }
        finally {
            if (revision === this.revision)
                this.checking.set(false);
        }
    }
    async logout() {
        const response = await fetch('/api/admin/logout', {
            method: 'POST', credentials: 'same-origin', headers: { 'X-Admin-Request': '1' }
        });
        if (!response.ok && response.status !== 401)
            throw new Error('No se pudo cerrar la sesión. Inténtalo de nuevo.');
        ++this.revision;
        this.isAdmin.set(false);
        this.checking.set(false);
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=auth.service.js.map