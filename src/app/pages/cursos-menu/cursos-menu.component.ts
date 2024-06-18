import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BannerComponent } from '../../components/banner/banner.component';
import { environment } from '../../../environments/environment.development';



@Component({
  selector: 'app-cursos-menu',
  standalone: true,
  imports: [NgFor, BannerComponent, RouterLink],
  templateUrl: './cursos-menu.component.html',
  styleUrls: ['./cursos-menu.component.scss']
})
export class CursosMenuComponent {

  private CDN = environment.urlBaseCDN;

  cursos = [{
    name: "Taller de Primeros Auxilios",
    url: this.CDN + "/images/rrhh/auxilio.jpg",
    redir: "./../taller-primeros-auxilios" 
  },
  {
  name: "Construyendo una Cultura de Seguridad y Salud",
  url: this.CDN + "/images/rrhh/seguridad-salud.png",
  redir: "./../curso-cultura-salud"
  },
  {
    name: "Prevención de las ETS",
    url: this.CDN + "/images/rrhh/ets.jpg",
    redir: "./../prevencion-ets"
  }

]

}
