import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'capital-humano', loadComponent: () => import('./pages/capital-humano/capital-humano.component').then(c => c.HomeCapitalHumanoComponent) },
  { path: 'centros-idiomas', loadComponent: () => import('./pages/centro-idiomas/centro-idiomas.component').then(c => c.CentroIdiomasComponent) },
  // { path: 'coordinacion-teg', loadComponent: () => import('./pages/coordinacion-teg/coordinacion-teg.component').then(c => c.CoordinacionTegComponent) },
  { path: 'comite-salud', loadComponent: () => import('./pages/comite-salud/comite-salud.component').then(c => c.ComiteSaludComponent)},
  { path: 'integrantes-seguridad-salud', loadComponent: () => import('./pages/integrantes-seguridad-salud/integrantes-seguridad-salud.component').then(c => c.IntegrantesSeguSaludComponent)},
  
  { path: 'cursos-menu', loadComponent: () => import('./pages/cursos-menu/cursos-menu.component').then(c => c.CursosMenuComponent)},
  { path: 'curso-cultura-salud', loadComponent: () => import('./pages/curso-cultura-salud/curso-cultura-salud.component').then(c => c.CursoCulturaSaludComponent)},
  { path: 'taller-primeros-auxilios', loadComponent: () => import('./pages/taller-primeros-auxilios/taller-primeros-auxilios.component').then(c => c.TallerPrimerosAuxiliosComponent)},
  { path: 'prevencion-ets', loadComponent: () => import('./pages/prevencion-ets/prevencion-ets.component').then(c => c.PrevencionEtsComponent)},
];
