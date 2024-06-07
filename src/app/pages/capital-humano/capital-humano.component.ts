// Angular.
import { Component } from '@angular/core';

// Componentes.
import { AsideNavComponent } from '../../components/aside-nav/aside-nav.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { SliderCircleComponent } from '../../components/slider-circle/slider-circle.component';

// Modelos.
import { LinkItem } from '../../core/models/links';
import { SliderConfig } from '../../core/models/slider-carousel';

// Variables de entorno.
import { environment } from '../../../environments/environment.development';



@Component({
  imports: [ AsideNavComponent, BannerComponent, SliderCircleComponent ],
  selector: 'app-caphumano',
  standalone: true,
  styleUrls: ['./capital-humano.component.scss'],
  templateUrl: './capital-humano.component.html',
})
export class HomeCapitalHumanoComponent {

  private CDN = environment.urlBaseCDN;

  public birthdaysData = [];

  public captacionFormacion: Array<LinkItem> = [
    { label: 'Concurso de Credenciales', path: '/capital-humano/captacion-servicio/concurso-credenciales' },
    { label: 'Nómina', path: '/capital-humano/captacion-servicio/nomina' },
    { label: 'Solicitud de Suministros', path: '/capital-humano/captacion-servicio/solicitud-suministros' },
    { label: 'Vacantes y envío de CV', path: '/capital-humano/captacion-servicio/vacantes' },
  ];

  public ServiciosPersonal: Array<LinkItem> = [
    { label: 'Beneficios', path: '/capital-humano/beneficios' },
    { label: 'Procedimientos', path: '/capital-humano/captacion-servicio/procedimientos' },
    { label: 'Normas', path: '/capital-humano/captacion-servicio/normas' },
  ];

  public slides = [
    { icon: this.CDN + '/images/rrhh/chequeo.png', route: '/capital-humano/chequeo', text: 'Chequeo' },
    { icon: this.CDN + '/images/rrhh/recibo-pago.png', route: '/capital-humano/recibo-pago', text: 'Recibo de pago' },
    { icon: this.CDN + '/images/rrhh/constancias.png', route: '/capital-humano/constancias', text: 'Constancias' },
    { icon: this.CDN + '/images/rrhh/formatos.png', route: '/capital-humano/formatos', text: 'Formatos' },
  ];

  public serviciosMedicos: Array<LinkItem> = [
    { label: 'Integrantes del Servicio de Seguridad y Salud en el Trabajo', path: '/capital-humano/seguridad-salud/integrantes-servicio' },
    { label: 'Servicios Médicos', path: '/capital-humano/seguridad-salud/servicio-medico' },
    { label: 'Medicina Ocupacional', path: '/capital-humano/seguridad-salud/medicina-ocupacional' },
    { label: 'Adiestramiento', path: '/capital-humano/seguridad-salud/adiestramiento-web' },
    { label: 'Comité de Seguridad Laboral', path: '/capital-humano/seguridad-salud/comite-salud' },
    { label: 'Política de Seguridad, Higiene y Ambiente', path: '/capital-humano/seguridad-salud/politicas' },
    { label: 'Cursos, Charlas y Talleres de Seguridad', path: '/capital-humano/seguridad-salud/menu-cursos' },
    { label: 'Información Preventiva en Materia de Seguridad', path: '/capital-humano/seguridad-salud/salud-trabajo' },
  ];

  public sliderConfig: SliderConfig = {
    bucleMode: true,
    handletrack: { active: true, time: 3000 },
    controls: {
      outSidePosition: 'top',
      dots: { where: 'inside' },
    }
  }
}