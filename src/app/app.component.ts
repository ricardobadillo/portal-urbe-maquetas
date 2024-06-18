import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoordinacionTegComponent } from './pages/coordinacion-teg/coordinacion-teg.component';
import { SaludTrabajoComponent } from './pages/salud-trabajo/salud-trabajo.component'
import { ProcedimientosComponent } from './pages/procedimientos/procedimientos.component'
import { PrevencionEtsComponent } from './pages/prevencion-ets/prevencion-ets.component'
import { CursoCulturaSaludComponent } from './pages/curso-cultura-salud/curso-cultura-salud.component'
import { CursosMenuComponent } from './pages/cursos-menu/cursos-menu.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoordinacionTegComponent, SaludTrabajoComponent, ProcedimientosComponent, PrevencionEtsComponent, CursoCulturaSaludComponent, CursosMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portal-urbe-maquetas';
}
