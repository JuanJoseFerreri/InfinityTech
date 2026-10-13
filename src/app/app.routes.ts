import { Routes } from '@angular/router';
import { adminGuard } from './admin.guard';
import { LEGAL_PAGES } from './legal-content';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'InfinityTech | La tecnología avanza',
    loadComponent: () => import('./app.component').then(module => module.AppComponent)
  },
  {
    path: 'login',
    title: 'Iniciar sesión | InfinityTech',
    loadComponent: () => import('./login.component').then(module => module.LoginComponent)
  },
  {
    path: 'admin',
    title: 'Administración | InfinityTech',
    canActivate: [adminGuard],
    loadComponent: () => import('./admin.component').then(module => module.AdminComponent)
  },
  ...Object.entries(LEGAL_PAGES).map(([path, page]) => ({
    path,
    title: `${page.title} | InfinityTech`,
    data: { page },
    loadComponent: () => import('./legal-page.component').then(module => module.LegalPageComponent)
  })),
  { path: '**', redirectTo: '' }
];
