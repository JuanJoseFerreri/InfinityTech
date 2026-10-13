import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { hasAdminSession } from './app/auth.service';
async function start() {
    const path = window.location.pathname.replace(/\/$/, '');
    if (path === '/admin') {
        // Do not mount the administration UI until the server confirms the session.
        const authenticated = await hasAdminSession().catch(() => false);
        if (!authenticated) {
            window.location.replace('/login');
            return;
        }
        const { AdminComponent } = await import('./app/admin.component');
        await bootstrapApplication(AdminComponent);
    }
    else if (path === '/login') {
        const { LoginComponent } = await import('./app/login.component');
        await bootstrapApplication(LoginComponent);
    }
    else {
        await bootstrapApplication(AppComponent);
    }
}
void start().catch(console.error);
//# sourceMappingURL=main.js.map