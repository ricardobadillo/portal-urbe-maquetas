// Angular.
import { Component } from '@angular/core';

// interfaz de las tarjetas
interface Professorship {
  title : string;
  img   : string;
  links : Array<Link>;
}

interface Link {
  path : string;
  label: string;
  matIcon : 'picture_as_pdf' | 'link' | 'movie';
  target ?: '_blank' | '_self';
}



@Component({
  selector: 'app-catedras-libres',
  templateUrl: './catedras-libres.component.html',
  styleUrls: ['./catedras-libres.component.scss']
})
export class CatedrasLibresComponent {

  public professorshipCards!: Professorship[];

  constructor() {
    // inicializando las tarjetas
    this.professorshipCards = [
      {
        title: 'Cátedra Libre Juan Pablo II',
        img: 'https://cdn.urbe.edu/portal-urbe/images/studies/extension/cl_juan_pablo_II.jpg',
        links : [
          {
            label:'Instalación de la Cátedra Juan Pablo II',
            matIcon:'picture_as_pdf',
            path:'https://cdn.urbe.edu/portal-urbe/documents/estudios-extension/palabras-rector-instalacion-catedra-JPII.pdf',
            target: '_blank'
          },
          {
            label:'Reglamento de la Cátedra Libre Juan Pablo II',
            matIcon:'picture_as_pdf',
            path:'https://cdn.urbe.edu/portal-urbe/documents/estudios-extension/reglamento-catedra-juan-pablo-II.pdf',
            target: '_blank'
          },
          {
            label:'Presentación Cátedra Libre Juan Pablo II - La conciencia recta va hacia la realidad',
            matIcon:'picture_as_pdf',
            path:'https://cdn.urbe.edu/portal-urbe/documents/estudios-extension/presentacion-catedra-JPII.pdf',
            target: '_blank'
          },
          {
            label:'Video: Catedra Libre "Juan Pablo II" - Un espacio para el fortalecimiento de valores humanos',
            matIcon:'movie',
            path:'http://youtu.be/9hhd0duVN7k',
            target: '_blank'
          },
        ]
      },
      {
        title: 'Cátedra Libre Dr. rafael Belloso Chacín',
        img: 'https://cdn.urbe.edu/portal-urbe/images/studies/extension/cl_dr-belloso.jpg',
        links: [
          {
            label:'Proyecto creación de la Cátedra Libre Dr. Rafael Belloso Chacín',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          }
        ]
      },
      {
        title:' Cátedra Libre Internacional del Ambiente y Sustentabilidad de La Cuenca del Lago de Maracaibo "Pablo Emilio Colmenares Bottaro"',
        img:'https://cdn.urbe.edu/portal-urbe/images/studies/extension/cl-lago.jpg',
        links:[
          {
            label:'Programa de Instalación de la cátedra',
            matIcon: 'link',
            path:'/estudios/extension/pablo-emilio-colmenares',
            target: '_self'
          },
          {
            label:'Reglamento de la Cátedra Libre Internacional  "Pablo Emilio Colmenares Bottaro"',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
          {
            label:'Síntesis Biográfica Pablo Emilio Colmenares Bottaro',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
          {
            label:'Conferencista Dr. Juan Carlos Sánchez',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
          {
            label:'Videos',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
        ]
      },
      {
        title: 'Cátedra Libre Internacional del Humor "Pedro León Zapata"',
        img: 'https://cdn.urbe.edu/portal-urbe/images/studies/extension/cl-humor.jpg',
        links: [
          {
            label:'Reseña de vida de Pedro Leon Zapata',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
          {
            label:'Visión, Misión y Objetivos',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
          {
            label:'Actividades de la cátedra',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
        ]
      },
      {
        title: ' Cátedra Libre Internacional "Jesús Ángel Socorro"',
        img: 'https://cdn.urbe.edu/portal-urbe/images/studies/extension/cl-jesus.jpg',
        links: [
          {
            label:'Actividades Realizadas',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
          {
            label:'Semblanza de Jesús Socorro',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
          {
            label:'Reglamento',
            matIcon: 'link',
            path:'/page-maintenance',
            target: '_self'
          },
          {
            label:'Video: Jesús Ángel Socorro - Una mente activa',
            matIcon: 'movie',
            path:'http://youtu.be/5WMkrR-RfMc',
            target: '_blank'
          },
        ]
      },
    ];
  }
}
