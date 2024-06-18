import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { BannerComponent } from '../../components/banner/banner.component';
import { environment } from '../../../environments/environment.development';


@Component({
  selector: 'app-taller-primeros-auxilios',
  standalone: true,
  imports: [NgFor, BannerComponent],
  templateUrl: './taller-primeros-auxilios.component.html',
  styleUrls: ['./taller-primeros-auxilios.component.scss']
})
export class TallerPrimerosAuxiliosComponent {

  private CDN = environment.urlBaseCDN;

  public images = [
    this.CDN + "/images/rrhh/aux-1.jpg",
    this.CDN + "/images/rrhh/aux-2.jpg",
    this.CDN + "/images/rrhh/aux-3.jpg",
    this.CDN + "/images/rrhh/aux-4.jpg",
    this.CDN + "/images/rrhh/aux-5.jpg",
    this.CDN + "/images/rrhh/aux-6.jpg",
    this.CDN + "/images/rrhh/aux-7.jpg",
    this.CDN + "/images/rrhh/aux-8.jpg",
    this.CDN + "/images/rrhh/aux-9.jpg",
    this.CDN + "/images/rrhh/aux-10.jpg",
    this.CDN + "/images/rrhh/aux-11.jpg",
    this.CDN + "/images/rrhh/aux-12.jpg"
  ]

}