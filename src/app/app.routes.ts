import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Gurami Jikia — AI & Machine Learning Developer',
  },
  { path: '**', redirectTo: '' },
];
