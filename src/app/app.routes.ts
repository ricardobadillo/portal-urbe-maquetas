import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'capital-humano', loadComponent: () => import('./pages/capital-humano/capital-humano.component').then(c => c.HomeCapitalHumanoComponent) },
  { path: 'centros-idiomas', loadComponent: () => import('./pages/centro-idiomas/centro-idiomas.component').then(c => c.CentroIdiomasComponent) },
  // { path: 'coordinacion-teg', loadComponent: () => import('./pages/coordinacion-teg/coordinacion-teg.component').then(c => c.CoordinacionTegComponent) },
];
