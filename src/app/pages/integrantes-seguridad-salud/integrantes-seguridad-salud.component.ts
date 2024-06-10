// Angular.
import { Component } from '@angular/core';

// Variables de entorno.
import { environment } from '../../../../../../environments/environment';



@Component({
  selector: 'app-integrantes-seguridad-salud',
  templateUrl: './integrantes-seguridad-salud.component.html',
  styleUrls: ['./integrantes-seguridad-salud.component.scss']
})
export class IntegrantesSeguSaludComponent {

  private CDN = environment.urlBaseCDN;


  integrantes = [
    {
      cargo: "Directora de Capital Humano - Ext. 8955",
      correo: "liliam.castro@urbe.edu",
      dpto: "Capital Humano",
      nombre: "Liliam Castro",
      url: this.CDN + "/images/rrhh/liliam-castro.png"
    },
    {
      cargo: "Medico Ocupacional - Ext. 8760",
      correo: "genesis.rivas@urbe.edu",
      dpto: "Servicios Médicos",
      nombre: "Genesis Rivas",
      url: this.CDN + "/images/rrhh/genesis-rivas.png"
    },
    {
      cargo: "Enfermera - Ext. 8760",
      correo: "omaira.sanchez@urbe.edu",
      dpto: "Servicios Médicos",
      nombre: "Omaira Sánchez",
      url: this.CDN + "/images/rrhh/omaira-sanchez.png"
    },
    {
      cargo: "Consultor Jurídico - Ext. 8754",
      correo: "jesus.tovar@urbe.edu",
      dpto: "Consultoría Jurídica",
      nombre: "Jesus Tovar",
      url: this.CDN + "/images/rrhh/jesus-tovar.png"
    },
    {
      cargo: "Coordinadora de Seguridad, Higiene y Ambiente - Ext. 8703",
      correo: "luisa.angulo@urbe.edu",
      dpto: "Capital Humano",
      nombre: "Luisa Angulo",
      url: this.CDN + "/images/rrhh/luisa-angulo.png"
    },
    {
      cargo: "Enfermera - Ext. 8760",
      correo: "grisbe.fonseca@urbe.edu",
      dpto: "Servicios Médicos",
      nombre: "Grisbe Fonseca",
      url: this.CDN + "/images/rrhh/grisbe-fonseca.png"
    },
    {
      cargo: "Medico Ocupacional - Ext. 8760",
      correo: "yarelis.gutierrez@urbe.edu",
      dpto: "Servicios Médicos",
      nombre: "Yarelis Gutiérrez",
      url: this.CDN + "/images/rrhh/yarelis-gutierrez.png"
    },
    {
      cargo: "Médico del Servicio de Seguridad y Salud en el Trabajo - Ext. 3052",
      correo: "ana.gonzalez@urbe.edu",
      dpto: "Servicios Médicos",
      nombre: "Ana Gonzalez",
      url: this.CDN + "/images/rrhh/ana-gonzalez.jpg"
    }
  ];
}