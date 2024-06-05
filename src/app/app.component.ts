import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {CoordinacionTegComponent } from './pages/coordinacion-teg/coordinacion-teg.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoordinacionTegComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portal-urbe-maquetas';
}
