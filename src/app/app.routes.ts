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
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./pages/cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'contactos',
    loadComponent: () => import('./pages/action-sheet/contactos/contactos.page').then( m => m.ContactosPage)
  },
  {
    path: 'chips',
    loadComponent: () => import('./pages/chips/chips.page').then( m => m.ChipsPage)
  },
  {
    path: 'posts',
    loadComponent: () => import('./pages/posts/posts.page').then( m => m.PostsPage)
  },
];
