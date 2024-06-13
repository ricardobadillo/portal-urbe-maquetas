
import { Component, } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  imports: [BannerComponent],
  standalone:true,
  selector: 'app-salud-trabajo',
  templateUrl: './salud-trabajo.component.html',
  styleUrls: ['./salud-trabajo.component.scss']
})
export class SaludTrabajoComponent {

  private CDN = environment.urlBaseCDN;
  
  salud_img = this.CDN + "/images/rrhh/ataque-de-panico (2).jpg"

}
