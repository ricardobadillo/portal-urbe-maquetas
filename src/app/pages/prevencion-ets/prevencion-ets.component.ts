import { Component } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-prevencion-ets',
  templateUrl: './prevencion-ets.component.html',
  styleUrls: ['./prevencion-ets.component.scss']
})
export class PrevencionEtsComponent {

  private CDN = environment.urlBaseCDN;

  ets_img = this.CDN + "/images/rrhh/ets-urbe.png"

}
