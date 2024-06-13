import { Routes } from '@angular/router';

export const routes: Routes = [
 // { path: 'centros-idiomas', loadComponent: () => import('./pages/centro-idiomas/centro-idiomas.component').then(c => c.CentroIdiomasComponent) },
  { path: 'coordinacion-teg', loadComponent: () => import('./pages/coordinacion-teg/coordinacion-teg.component').then(c => c.CoordinacionTegComponent) },
  { path: 'salud-trabajo', loadComponent: () => import('./pages/salud-trabajo/salud-trabajo.component').then(c => c.SaludTrabajoComponent) },
  { path: 'procedimientos', loadComponent: () => import('./pages/procedimientos/procedimientos.component').then(c => c.ProcedimientosComponent) },
];
