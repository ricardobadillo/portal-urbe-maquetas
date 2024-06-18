import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { NgFor, NgStyle } from '@angular/common';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  imports: [NgFor, BannerComponent, NgStyle],
  standalone: true,
  selector: 'app-prevencion-ets',
  templateUrl: './prevencion-ets.component.html',
  styleUrls: ['./prevencion-ets.component.scss']
})
export class PrevencionEtsComponent {

  private CDN = environment.urlBaseCDN;

  ets_img = this.CDN + "/images/rrhh/ets-urbe.png"

}
