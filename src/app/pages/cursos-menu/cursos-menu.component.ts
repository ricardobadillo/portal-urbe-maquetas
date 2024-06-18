import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { NgFor, NgStyle } from '@angular/common';
import { BannerComponent } from '../../components/banner/banner.component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgFor, BannerComponent, NgStyle, RouterLink],
  standalone: true,
  selector: 'app-cursos-menu',
  templateUrl: './cursos-menu.component.html',
  styleUrls: ['./cursos-menu.component.scss']
})
export class CursosMenuComponent {

  private CDN = environment.urlBaseCDN;

  cursos = [{
    name: "Taller de Primeros Auxilios",
    url: this.CDN + "/images/rrhh/auxilio.jpg",
    redir: "/capital-humano/seguridad-salud/taller-primeros-auxilios"
  },
  {
    name: "Construyendo una Cultura de Seguridad y Salud",
    url: this.CDN + "/images/rrhh/seguridad-salud.png",
    redir: "/capital-humano/seguridad-salud/curso-cultura-salud"
  },
  {
    name: "Prevención de las ETS",
    url: this.CDN + "/images/rrhh/ets.jpg",
    redir: "/capital-humano/seguridad-salud/prevencion-ets"
  }

  ]

}
