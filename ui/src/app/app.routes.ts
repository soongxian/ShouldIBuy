import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/people/people.routes').then(m => m.PEOPLE_ROUTES) },
  { path: 'rich', loadChildren: () => import('./pages/rich/rich.routes').then(m => m.RICH_ROUTES) }
];
