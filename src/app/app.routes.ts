import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'centros-idiomas', loadComponent: () => import('./pages/centro-idiomas/centro-idiomas.component').then(c => c.CentroIdiomasComponent) },
  { path: 'coordinacion-teg', loadComponent: () => import('./pages/coordinacion-teg/coordinacion-teg.component').then(c => c.CoordinacionTegComponent) },
  { path: 'salud-trabajo', loadComponent: () => import('./pages/salud-trabajo/salud-trabajo.component').then(c => c.SaludTrabajoComponent) },
  { path: 'procedimientos', loadComponent: () => import('./pages/procedimientos/procedimientos.component').then(c => c.ProcedimientosComponent) },
  { path: 'curso-cultura-salud', loadComponent: () => import('./pages/curso-cultura-salud/curso-cultura-salud.component').then(c => c.CursoCulturaSaludComponent) },
  { path: 'cursos-menu', loadComponent: () => import('./pages/cursos-menu/cursos-menu.component').then(c => c.CursosMenuComponent) },
  { path: 'prevencion-ets', loadComponent: () => import('./pages/prevencion-ets/prevencion-ets.component').then(c => c.PrevencionEtsComponent) },
  { path: 'taller-primeros-auxilios', loadComponent: () => import('./pages/taller-primeros-auxilios/taller-primeros-auxilios.component').then(c => c.TallerPrimerosAuxiliosComponent) },
];
