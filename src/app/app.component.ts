import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {CoordinacionTegComponent } from './pages/coordinacion-teg/coordinacion-teg.component';
import {SaludTrabajoComponent} from './pages/salud-trabajo/salud-trabajo.component'
import{ProcedimientosComponent} from './pages/procedimientos/procedimientos.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoordinacionTegComponent,SaludTrabajoComponent,ProcedimientosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portal-urbe-maquetas';
}
