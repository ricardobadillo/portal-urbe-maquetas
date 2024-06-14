import { Component } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-curso-cultura-salud',
  templateUrl: './curso-cultura-salud.component.html',
  styleUrls: ['./curso-cultura-salud.component.scss']
})
export class CursoCulturaSaludComponent {

  private CDN = environment.urlBaseCDN;

  seguridad_img = this.CDN + "/images/rrhh/seguridad-salud-2.jpg"

}
