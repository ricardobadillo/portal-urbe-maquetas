import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CentroIdiomasComponent } from './pages/centro-idiomas/centro-idiomas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CentroIdiomasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portal-urbe-maquetas';
}
