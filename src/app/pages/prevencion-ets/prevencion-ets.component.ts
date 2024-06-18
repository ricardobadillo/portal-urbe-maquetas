import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

import { environment } from '../../../environments/environment.development';


@Component({
  selector: 'app-prevencion-ets',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './prevencion-ets.component.html',
  styleUrls: ['./prevencion-ets.component.scss']
})
export class PrevencionEtsComponent {

  private CDN = environment.urlBaseCDN;

  ets_img = this.CDN + "/images/rrhh/ets-urbe.png"

}
