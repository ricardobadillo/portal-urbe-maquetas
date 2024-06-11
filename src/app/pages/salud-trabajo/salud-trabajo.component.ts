import { Component } from '@angular/core';
import { environment } from './../../../../../../environments/environment';

@Component({
  selector: 'app-salud-trabajo',
  templateUrl: './salud-trabajo.component.html',
  styleUrls: ['./salud-trabajo.component.scss']
})
export class SaludTrabajoComponent {

  private CDN = environment.urlBaseCDN;
  
  salud_img = this.CDN + "/images/rrhh/ataque-de-panico (2).jpg"

}
