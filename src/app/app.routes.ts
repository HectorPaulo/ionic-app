import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'recordatorio',
    loadComponent: () => import('./pages/recordatorio/recordatorio.page').then( m => m.RecordatorioPage)
  },
  {
    path: 'alerts',
    loadComponent: () => import('./pages/alerts/alerts.page').then( m => m.AlertsPage)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./pages/buttons/buttons.page').then( m => m.ButtonsPage)
  },
];
