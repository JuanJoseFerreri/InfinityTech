import { Injectable, signal } from '@angular/core';

/** The server's HttpOnly session is the authority, never a localStorage flag. */
export async function hasAdminSession(): Promise<boolean> {
  const response = await fetch('/api/admin/session', { credentials: 'same-origin', cache: 'no-store' });
  if (response.status === 401 || response.status === 403) return false;
  if (!response.ok) throw new Error('No se pudo comprobar la sesión. Inténtalo de nuevo.');
  const session = await response.json();
  return session.ok === true;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isAdmin = signal(false);
  readonly checking = signal(true);
  private revision = 0;

  async refresh(): Promise<boolean> {
    const revision = ++this.revision;
    this.checking.set(true);
    try {
      const active = await hasAdminSession();
      if (revision === this.revision) this.isAdmin.set(active);
    } catch {
      if (revision === this.revision) this.isAdmin.set(false);
    } finally {
      if (revision === this.revision) this.checking.set(false);
    }
    // A superseded request must not grant route access using a cached signal.
    return revision === this.revision && this.isAdmin();
  }

  async logout(): Promise<void> {
    const response = await fetch('/api/admin/logout', {
      method: 'POST', credentials: 'same-origin', headers: { 'X-Admin-Request': '1' }
    });
    if (!response.ok && response.status !== 401) throw new Error('No se pudo cerrar la sesión. Inténtalo de nuevo.');
    this.clearSession();
  }

  clearSession(): void {
    ++this.revision;
    this.isAdmin.set(false);
    this.checking.set(false);
  }
}
