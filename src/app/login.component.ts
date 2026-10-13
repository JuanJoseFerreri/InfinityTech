import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { hasAdminSession } from './auth.service';

@Component({
  selector: 'app-login', standalone: true, imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html', styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly checking = signal(true);
  readonly busy = signal(false);
  readonly error = signal('');
  email = '';
  password = '';
  constructor() { void this.check(); }

  private async check(): Promise<void> {
    try {
      if (await hasAdminSession() && !this.destroyRef.destroyed) {
        await this.router.navigateByUrl('/', { replaceUrl: true });
      }
    }
    catch { this.error.set('No se pudo comprobar la sesión. Comprueba la conexión e inténtalo de nuevo.'); }
    finally { this.checking.set(false); }
  }

  async login(): Promise<void> {
    if (this.busy() || !this.email.trim() || !this.password) return;
    this.busy.set(true);
    this.error.set('');
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST', credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Request': '1' },
        body: JSON.stringify({ email: this.email.trim(), password: this.password })
      });
      if (response.status === 429) throw new Error('Demasiados intentos. Espera 15 minutos antes de volver a intentarlo.');
      if (response.status === 400 || response.status === 401) throw new Error('Correo o contraseña incorrectos.');
      if (!response.ok) throw new Error('No se pudo iniciar sesión. Inténtalo de nuevo.');
      if (!await hasAdminSession()) throw new Error('No se pudo validar la sesión. Revisa que las cookies estén habilitadas.');
      if (!this.destroyRef.destroyed) await this.router.navigateByUrl('/', { replaceUrl: true });
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'No se pudo conectar con el servidor.');
    } finally {
      this.password = '';
      this.busy.set(false);
    }
  }
}
