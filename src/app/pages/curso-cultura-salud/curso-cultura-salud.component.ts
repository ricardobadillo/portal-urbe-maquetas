import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BannerComponent } from '../../components/banner/banner.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curso-cultura-salud',
  imports: [BannerComponent, NgFor, RouterLink],
  standalone: true,
  templateUrl: './curso-cultura-salud.component.html',
  styleUrls: ['./curso-cultura-salud.component.scss']
})
export class CursoCulturaSaludComponent {

  private CDN = environment.urlBaseCDN;

  seguridad_img = this.CDN + "/images/rrhh/seguridad-salud-2.jpg"

}
