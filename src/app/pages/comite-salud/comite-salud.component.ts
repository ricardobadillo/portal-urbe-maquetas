// Angular.
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

// Variables de entorno.
import { BannerComponent } from '../../components/banner/banner.component';
import { environment } from '../../../environments/environment.development';


@Component({
  selector: 'app-comite-salud',
  standalone: true,
  imports: [BannerComponent, NgFor],
  templateUrl: './comite-salud.component.html',
  styleUrls: ['./comite-salud.component.scss']
})
export class ComiteSaludComponent {

  private CDN = environment.urlBaseCDN;

  public delegadosPrevencion = [
    {
      name: "Melvis Piña",
      cedula: "5.116.141",
      cargo: "Cajera",
      dpto: "Caja",
      url: this.CDN + "/images/rrhh/melvis-pina.png",
    },
    {
      name: "Marcos Rosado",
      cedula: "9.112.838",
      cargo: "Docente",
      dpto: "Decanato de la Facultad de Cs. de Informática",
      url: this.CDN + "/images/rrhh/marcos-rosado.png",
    },
    {
      name: "Harold Zavala",
      cedula: "3.506.289",
      cargo: "Docente",
      dpto: "Decanato de la Facultad de Ciencias Jurídicas y Políticas",
      url: this.CDN + "/images/rrhh/harold-zabala.png",
    },
    {
      name: "Jaime Prada",
      cedula: "9.770.059",
      cargo: "Mantenimiento General",
      dpto: "Mantenimiento",
      url: this.CDN + "/images/rrhh/jaime-prada.png",
    },
  ];

  public representantesPatrono = [
    {
      name: "Liliam Castro",
      cedula: "6.562.282",
      cargo: "Directora de Capital Humano",
      dpto: "Dirección de Capital Humano",
      url: this.CDN + "/images/rrhh/liliam-castro.png",
    },
    {
      name: "Andrea Flores",
      cedula: "16.624.973",
      cargo: "Jefe de Servicio al Personal",
      dpto: "Dirección de Capital Humano",
      url: this.CDN + "/images/rrhh/andrea-flores.png",
    },
    {
      name: "Myriam Fernández",
      cedula: "4.644.113",
      cargo: "Coordinador Docente",
      dpto: "Coordinador Docente",
      url: this.CDN + "/images/rrhh/myriam-fernandez.jpg",
    },
    {
      name: "Gustavo Belloso",
      cedula: "7.887.339",
      cargo: "Jefe de Mantenimiento",
      dpto: "Servicios Generales",
      url: this.CDN + "/images/rrhh/gustavo-belloso.jpg",
    },
  ];
}