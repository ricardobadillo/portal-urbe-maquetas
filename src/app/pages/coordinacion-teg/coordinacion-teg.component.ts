// Angular.
import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Title } from '@angular/platform-browser';

// Modelos.
import { BannerComponent } from '../../components/banner/banner.component';
import { InfoSection } from '../../core/models/InfoSection';
import { SubNavBarItem } from '../../core/models/sub-nav-bar';


// Variables de entorno.
import { environment } from '../../../environments/environment.development';

interface Career {
  backgroundImage: string;
  fileGroups: FileGroup[];
  infoMultiLine: string[];
  title: string;
}

interface File {
  icoUrl: string;
  link: string;
  name: string;
}

interface Info {
  Title: string;
  items: {
    newtitle: string;
    infovalue?: infoValue[];
  }[]
}

interface infoValue {
  value: {
    titleline?: string;
    content?: string;
    tutores?: string;
    expanded?: boolean;
  }[]

}

interface FileGroup {
  files?: File[];
  title: string;
  info?: Info[];
}

@Component({
  imports: [MatExpansionModule, BannerComponent],
  selector: 'app-coordinacion-teg',
  standalone: true,
  templateUrl: './coordinacion-teg.component.html',
  styleUrls: ['./coordinacion-teg.component.scss']
})
export class CoordinacionTegComponent implements OnInit {

  private CDN: string = environment.urlBaseCDN;

  public careers!: Career[];
  public infoSeccion!: InfoSection[];
  public subNavBarItems!: SubNavBarItem[];


  constructor(private title: Title) {
    this.careers = [
      {
        title: 'Ingeniería',
        infoMultiLine: [
          'Haber aprobado 171 unidades crédito',
          'Faltarle tres (3) períodos para graduarse. Haber aprobado Ingles V y Servicio Comunitario',
        ],

        fileGroups: [
          {
            title: 'Lineas de investigación',
            info: [
              {
                Title: 'Informática',
                items: [
                  {
                    newtitle: 'Ingeniería del Software',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Aplicaciones WEB',
                          content: `Esta área se vincula al desarrollo de programas informáticos que pueden ser ejecutados desde internet, desarrollados con lenguaje soportado por los navegadores, permitiendo la facilidad de mantener y actualizar las aplicaciones sin la necesidad de distribuir e instalar. Poseen la facilidad de ser ejecutadas en múltiples plataforma.`,
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Juan Medina, Owen Henríquez, Zulma Revilla'
                        },
                        {
                          titleline: 'Software Aplicado a telecomunicaciones',
                          content: `Esta área va dirigida al diseño y desarrollo de aplicaciones o programas informáticos para redes en las áreas de auditoría y calidad de servicios, asimismo está relacionada con el desarrollo de aplicaciones a nivel de telefonía en cuanto a la creación de servicios y aplicaciones móviles.`,
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        },
                        {
                          titleline: 'Desarrollo de sistemas de informacion',
                          content: `Dirigida al desarrollo de soluciones informáticas, orientadas al tratamiento y administración de datos e información, organizados y listos para su posterior uso, generados para cubrir una necesidad o problema empresarial.`,
                          tutores: 'Tutores: Luis Fernandez, Jimmy Stavisky, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Juan Medina, Zulma Revilla'
                        },
                        {
                          titleline: 'Sistemas de Base de Datos ',
                          content: `El área está dirigida al diseño y desarrollo de gestores de datos en grandes cantidades de información de forma estructurada, haciendo posible acceso a los datos de forma ágiles y rápidos.`,
                          tutores: 'Tutores: Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Owen Henríquez, Zulma Revilla'
                        },
                        {
                          titleline: 'Sistemas de seguridad informatica',
                          content: `El área está orientada a desarrollar propuestas que permitan garantizar la protección de la infraestructura computacional de una organización, permitiendo brindar integridad, confidencialidad, disponibilidad, autenticación, a través de estándares, protocolos, métodos, reglas, herramientas y leyes.`,
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Gustavo Valdeblanquez, Rafael Escalona, Owen Henríquez, Zulma Revilla'
                        },
                        {
                          titleline: 'Sistemas Inteligentes',
                          content: `El área está enfocada al desarrollo de sistemas expertos que muestran comportamiento inteligente o interactúan de una forma más inteligente con su entorno y otros sistemas. Esta área está vinculada a la transferencia de conocimiento mediante el uso de métodos y herramientas apoyados en el área de inteligencia artificial.`,
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez, Zulma Revilla,  Rafael Escalona'
                        },
                        {
                          titleline: 'Aplicaciones educativas',
                          content: `Esta área temática hace referencia al diseño de herramientas de software específicamente orientadas para complementar procesos educativos a cualquier nivel. Se espera el diseño educativo y el diseño interactivo, con un uso intensivo de multimedia interactiva. Se requiere de los futuros ingenieros la construcción de tutoriales, herramientas de simulación, ejercitadores, entre otros.`,
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Jose Oropeza, Juan Medina'
                        },
                        {
                          titleline: 'Aplicaciones móviles',
                          content: `Esta área temática se dirige al desarrollo de programas informáticos que serán ejecutados en dispositivos móviles como teléfonos, tabletas entre otros, de uno o múltiples usuarios.`,
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Owen Henríquez, Zulma Revilla, Jose Oropeza, Juan Medina'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Entorno Productivos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Diseño y configuración de redes',
                          content: 'Esta área temática se centra en el diseño de sistemas organizados donde se seleccionan las tecnologías más adecuadas para el manejo del tráfico generado por las aplicaciones informáticas, se enmarca en las capas del modelo de referencia OSI, generando de este modo investigaciones conducentes a proponer: arquitecturas, topologías, servicios basados en la red, reingenierías, entre otros.',
                          tutores: 'Tutores: Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        },
                        {
                          titleline: 'Desarrollo de Sistemas de Información',
                          content: 'Dirigida al desarrollo de soluciones informáticas, orientadas al tratamiento y administración de datos e información, organizados y listos para su posterior uso, generados para cubrir una necesidad o problema empresarial.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Zulma Revilla'
                        },
                        {
                          titleline: 'Sistemas de Seguridad Informática',
                          content: 'El área está orientada a desarrollar propuestas que permitan garantizar la protección de la infraestructura computacional de una organización, permitiendo brindar integridad, confidencialidad, disponibilidad, autenticación, a través de estándares, protocolos, métodos, reglas, herramientas y leyes.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez, Zulma Revilla, Luis Fernandez'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Ingenieria Biomédica',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Bioinformatica',
                          content: 'Esta área temática tiene como objeto el desarrollo de proyectos de investigación que permitan diseñar y aplicar herramientas informáticas y computacionales para mejorar el manejo de datos biológicos, reuniendo, almacenando, organizando, analizando y permitiendo interpretar estos datos.',
                          tutores: 'Tutores: Luis Fernandez, Jimmy Stavisky, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Owen Henríquez,  Zulma Revilla'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Redes',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Seguridad de Redes',
                          content: 'Esta área temática está orientada a desarrollar propuestas que permitan garantizar la protección de la infraestructura computacional de una organización, permitiendo brindar integridad, confidencialidad, disponibilidad, autenticación, a través de estándares, protocolos, métodos, reglas, herramientas y leyes.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez, Zulma Revilla, Luis Fernandez'
                        },
                        {
                          titleline: 'Plataformas E- Learning',
                          content: 'Esta área temática hace referencia al diseño de herramientas de software específicamente orientadas a complementar procesos educativos de forma remota usando la internet',
                          tutores: 'Tutores: Luis Fernandez, Jimmy Stavisky, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Juan Medina, Zulma Revilla'
                        },
                        {
                          titleline: 'VideoJuegos',
                          content: 'Esta área temática se dirige al desarrollo de módulos de interfaz para juegos en red que a través de una conexión de banda ancha, se conectan con un servidor que abre paso para que los jugadores cuyas computadoras tienen instalado ese programa puedan jugar el mismo juego simultáneamente.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Jimmy Stavisky, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Juan Medina'
                        },
                        {
                          titleline: 'Protocolos',
                          content: 'Esta área temática se dirige al diseño o aplicación de protocolos de comunicación que permitan la interconexión de sistemas o redes de computadoras.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Sistemas de conversión de energías',
                    infovalue: [{
                      value: [{
                        titleline: 'Sistemas de administración de energía',
                        content: 'Esta área temática tiene como propósito el desarrollo de software que permita controlar, supervisar, recopilar datos, analizar datos y generar informes de actividades locales y/o remotas, en situaciones de generación y/o consumo de energía.',
                        tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez, Zulma Revilla'
                      }]
                    }
                    ]
                  },
                  {
                    newtitle: 'Sistemas Inteligentes',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Algoritmos genéticos',
                          content: 'Esta área temática esta dirigida a la formulación de proyectos que permitan la creación u optimización de software donde las posibles soluciones pueden ser mutadas o alteradas para evolucionar hacia mejores soluciones que optimizaran el proceso.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        },
                        {
                          titleline: 'Sistemas expertos',
                          content: 'Esta área temática aplica técnicas de inteligencia artificial en el desarrollo de software que basan su funcionamiento en el conocimiento almacenado proveniente de expertos en un área determinada.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        },
                        {
                          titleline: 'Redes neuronales',
                          content: 'Esta área temática esta dirigida a la formulación de proyectos que permitan la creación u optimización de software que pueda emular ciertas características propias de los humanos, como la capacidad de memorizar y de asociar hechos para resolver problemas que no pueden expresarse a través de un algoritmo.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        },
                        {
                          titleline: 'Inteligencia artificial',
                          content: 'Esta área temática esta dirigida a la formulación de proyectos que permitan la creación u optimización de software que sinteticen y automaticen tareas que en principio son intelectuales, para mejorar significativamente las capacidades y contribuciones humanas.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Control y automatización de procesos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Programación de sistemas automatizados',
                          content: 'Esta área temática se dirige al desarrollo de software que permita sustituir técnicas manuales por técnicas automáticas de manera tal que aumente la eficiencia y precisión del proceso.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        },
                        {
                          titleline: 'Programación de controladores',
                          content: 'Esta área temática se dirige al desarrollo de software que permita la operación de controladores de procesos automatizados.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Tecnología e innovación agropecuaria y del ambiente',
                    infovalue: [{
                      value: [{
                        titleline: 'Sistemas predictivos basados en variables climáticas',
                        content: 'Esta área temática se dirige al desarrollo de software que permita analizar procesos físicos, químicos y biológicos que afectan el sistema climático, con el propósito de estudiar la dinámica del sistema meteorológico y climático, y de esta forma proyectar el clima futuro',
                        tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez, Zulma Revilla'
                      }]
                    }
                    ]
                  },
                  {
                    newtitle: 'Proyectos de investigación, desarrollo e innovación',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Redes Sociales',
                          content: 'Esta área temática se dirige al desarrollo o aplicación de software que permita crear, organizar, administrar y evaluar estructuras en Internet compuestas por personas u organizaciones que se conectan a partir de intereses o valores comunes.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Jose Oropeza, Juan Medina, Zulma Revilla'
                        },
                        {
                          titleline: 'TIC',
                          content: 'Esta área temática se dirige al desarrollo o aplicación de software dirigido a la integración de las telecomunicaciones y las computadoras, así como el software necesario, el middleware, almacenamiento, sistemas audiovisuales y producción audiovisual, que permiten a los usuarios acceder, almacenar, transmitir y manipular información.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Jose Oropeza, Juan Medina, Zulma Revilla'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Videojuegos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Aplicaciones locales o distribuida',
                          content: 'Esta área temática se dirige al desarrollo de software para juegos locales o en red, de uno o múltiples jugadores, que se ejecutaran en una o múltiples plataformas de hardware.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Owen Henríquez, Zulma Revilla'
                        },
                        {
                          titleline: 'Aplicaciones Web',
                          content: 'Esta área temática se dirige al desarrollo de software para juegos basados en paginas WEB, de uno o múltiples jugadores.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Owen Henríquez, Zulma Revilla, Jose Oropeza'
                        },
                        {
                          titleline: 'Aplicaciones móviles',
                          content: 'Esta área temática se dirige al desarrollo de software para juegos que serán ejecutados en dispositivos móviles como teléfonos, tabletas entre otros, de uno o múltiples jugadores.',
                          tutores: 'Tutores: Luis Fernandez,Juan Medina, Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Owen Henríquez, Zulma Revilla, Jose Oropeza'
                        },
                        {
                          titleline: 'Realidad virtual',
                          content: 'Esta área temática tiene como propósito el desarrollo de software de juego que basado en un hardware permite introducir al jugador a un escenario artificial desligado de la realidad física.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Owen Henríquez, Zulma Revilla, Jose Oropeza'
                        }
                      ]
                    }
                    ]
                  }]
              },

              {
                Title: 'Industrial',
                items: [
                  {
                    newtitle: 'Entornos Productivos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Analisis y mejoramiento de los procesos',
                          content: 'Esta área temática comprende todas aquellos estudios en empresas que busquen incrementar la productividad , mediante la eliminación o reducción de actividades innecesarias , dejando sólo aquellas que agreguen valor a los procesos',
                          tutores: 'Tutores: Alfredo Finol, Cecilia León, Maria Gómez, Tulio Montes de Oca, Maria Gómez, Leandro Coello, Edgar Hernandez, Cesar Martinez'
                        },
                        {
                          titleline: 'Distribución y redistribución de plantas',
                          content: 'Esta área temática se dirige a la búsqueda de la mejor distribución de las plantas industriales o de oficinas que busquen integrar todos los elementos de forma tal que se pueda obtener el mejor resultado en un proceso',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez'
                        },
                        {
                          titleline: 'Gestión de almacenes',
                          content: ' Esta área temática comprende todas las investigaciones que incluyen la recepción, almacenamiento y movimiento de cualquier material dentro del almacén, su consumo, así como el tratamiento y análisis de los datos generados.',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Procesos Logísticos',
                          content: 'Esta área temática esta dirigida a todas aquellas actividades que aseguran la correcta coordinación del transporte y distribución de mercancías, así como la producción de los productos.',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Cadena de suministro',
                          content: 'Esta área temática involucra la investigación del proceso relacionado con el producto, desde la compra y fabricación de las materias primas hasta la resolución final, es decir, la entrega de este artículo al cliente.',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Estudio de tiempos y movimiento',
                          content: 'Esta área temática comprende el estudio de casos que buscan la medición de tiempos permisibles para realizar una tarea determinada, con base al contenido del trabajo del método prescrito, con la debida consideración de la fatiga y las demoras personales y los retrasos inevitables',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Estudio de movimientos',
                          content: 'Esta área temática involucra el análisis cuidadoso de los diversos movimientos que efectúa el cuerpo al ejecutar un trabajo, con el fin de mejorar las actividades que se realicen.',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Teoría de colas',
                          content: 'Esta área temática estudia factores como el tiempo de espera medio en las colas o la capacidad de trabajo del sistema sin que llegue a colapsar.',
                          tutores: 'Tutores: Cecilia León, Yoleida Marquez'
                        },
                        {
                          titleline: 'Análisis de los factores de productividad',
                          content: 'Esta área temática identifica aquellos procesos que presentan deficiencias o que requieren de mejoras, con la finalidad de optimizar tiempo y recursos en el momento oportuno, logrando de esta forma aumentar la rentabilidad e incrementos en su productividad.',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Planificacion y control de la produccion',
                          content: 'Esta área temática aplica modelos, técnicas y estrategias de planificación que permitan el posterior control de todos los aspectos de la fabricación y/o producción',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Manejo de materiales',
                          content: 'Esta área temática involucra la selección de métodos, instalaciones, mano de obra y equipamiento para transporte, embalaje y almacenaje de productos. El manejo de materiales no se limita solo al movimiento, sino al embalaje, manipulación, transporte, ubicación y almacenaje teniendo en cuenta el tiempo y el espacio disponibles',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Determinación de mermas en procesos',
                          content: 'Esta área temática se refiere a investigaciones que determinan todos aquellos aspectos involucrados en un proceso de producción que generan diferencia entre el valor esperado de producción y el valor obtenido.',
                          tutores: 'Tutores: Cecilia León, Alfredo Finol, Maria Gómez, Edgar Hernandez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Sistemas de gestión de calidad',
                          content: 'Esta área temática se dirige a investigaciones que definen la información documentada necesaria para mejorar los aspectos relacionados con la Gestión de calidad',
                          tutores: 'Tutores: Cecilia León, Maria Gómez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Sistemas de gestión de seguridad alimentaria',
                          content: 'Esta área temática aplica un enfoque sistemático para controlar los peligros dentro de la inocuidad alimentaria con el fin de garantizar que los alimentos sean seguros para el consumo',
                          tutores: 'Tutores: Cecilia León, Maria Gómez, Leandro Coello, Cesar Martinez'
                        },
                        {
                          titleline: 'Sistemas de costos',
                          content: 'Esta área temática involucra todos aquellos estudios que desean definir métodos o procedimientos formales, técnicos y administrativos, que permitan a la empresa controlar los costos en los distintos procesos de la organización, es decir, en cada área o departamento, por ejemplo Costos basados en actividades',
                          tutores: 'Tutores: Cecilia León, Tulio Montes de Oca, Leandro Coello, Edgar Hernandez, Cesar Martinez'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Gerencia',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Gerencia estratégica',
                          content: 'El objetivo fundamental de esta área temática es el desarrollo de planes que permitan alcanzar objetivos y metas que poseen un fuerte impacto en el futuro de la organización a largo plazo y que pueden definir su éxito o fracaso, también para identificar posibles amenazas o riesgos.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Edgar Hernandez'
                        },
                        {
                          titleline: 'Indicadores de gestión',
                          content: 'El área está enfocada al desarrollo de expresiones cuantitativas del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, pueda señalar una desviación sobre la cual se tomen acciones correctivas o preventivas.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Edgar Hernandez, Alfredo Finol'
                        },
                        {
                          titleline: 'Capital humano',
                          content: 'El área está enfocada al desarrollo de expresiones cuantitativas del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, pueda señalar una desviación sobre la cual se tomen acciones correctivas o preventivas.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Edgar Hernandez, Alfredo Finol'
                        },
                        {
                          titleline: 'Cultura organizacional',
                          content: 'Esta área temática se centra en la elaboración de propuestas que permitan establecer el adecuado proceso de análisis organizativo y establecimiento de requerimientos, que conduzcan a la adquisición de tecnologías, contratación de un servicios, selección de proveedores o productos en materia de Tecnología.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Edgar Hernandez'
                        },
                        {
                          titleline: ' Transferencia de tecnología',
                          content: 'Esta área temática se centra en la elaboración de propuestas que permitan el análisis, aplicación o mejora de procesos a través de los cuales se entregan los conocimientos científicos y tecnológicos para desarrollar nuevas aplicaciones, nuevos productos o la generación de nuevos servicios.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Edgar Hernandez'
                        },
                        {
                          titleline: 'Emprendimiento',
                          content: 'El objetivo fundamental de esta área temática es el desarrollo de planes que fomenten la iniciativa y la motivación de los miembros de una organización o grupo social, aumentando su participación, cultura y formación en pro del desarrollo y competitividad de la organización o grupo social.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Edgar Hernandez, Pablo Reyes'
                        },
                        {
                          titleline: 'Calidad de servicio',
                          content: 'Esta área temática se centra en la elaboración de propuestas que permitan a las organizaciones tanto industriales, como comerciales o de servicios que buscan a partir de su actividad económica principal, satisfacer de forma integral a la comunidad, población o cliente hacia el cual está dirigido el producto o servicio desarrollado, tomando como referencia la satisfacción del cliente, en aras de garantizar un intercambio de recursos que potencie a la empresa y la proyecte en el tiempo.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Edgar Hernandez, Maria Gómez, Alfredo Finol'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Tecnología e innovación agropecuaria y del ambiente',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Sistemas de gestión ambiental',
                          content: 'Esta área temática genera y/o aplica Información documentada debidamente organizada que permitan determinar, prevenir y controlar los impactos medioambientales que produce una empresa sobre su Medio Ambiente, teniendo siempre presentes los recursos disponibles',
                          tutores: 'Tutores: Maria Gómez, Lourdes Nuñez'
                        },
                        {
                          titleline: 'Estudio de impacto ambiental',
                          content: ': Esta área temática esta dirigida a realizar estudios técnicos, objetivos, y de carácter interdisciplinario, que permitan describir detalladamente un proyecto, indicando como afectará recursos como el agua, clima, suelo, entre otros.',
                          tutores: 'Tutores: Leandro Coello, Lourdes Nuñez'
                        },
                        {
                          titleline: 'Reciclaje',
                          content: 'Esta área temática esta dirigida a investigaciones que permitan determinar y/o aplicar las herramientas para convertir residuos en nuevos productos o en materia prima para su posterior utilización.',
                          tutores: 'Tutores: Maria Gómez, Lourdes Nuñez, Daniel Gonzáles'
                        },
                        {
                          titleline: 'Desarrollo sustentable',
                          content: 'Esta área temática esta dirigida a investigaciones que permitan desarrollar procesos eficientes en el manejo de los recursos naturales para preservar el equilibrio ecológico, a fin de garantizar de forma responsable la distribución equitativa de tales recursos en el presente y su disponibilidad para las generaciones futuras.',
                          tutores: 'Tutores: Leandro Coello, Pablo Reyes'
                        },
                        {
                          titleline: 'Eco Innovación',
                          content: 'Esta área temática involucra la creación, producción y desarrollo de productos y nuevas formas de trabajar que contribuyan al desarrollo sustentable del planeta y al óptimo aprovechamiento de los recursos naturales.',
                        },
                        {
                          titleline: 'Tratamiento de residuos',
                          content: 'Esta área temática comprende investigaciones dirigidas al tratamiento de residuos que incluyan la operación o conjunto de operaciones que tienen por objetivo modificar las características físicas, químicas o biológicas de un residuo, para la neutralización de sus potenciales peligros y o su reutilización.',
                          tutores: 'Tutores: Maria Gómez, Lourdes Nuñez, Daniel Gonzáles'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Proyectos de investigación, desarrollo e innovación',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Energías sustentables',
                          content: 'Esta área temática esta dirigida al desarrollo de proyectos que usen energías limpias y que provengan de fuentes renovables',
                          tutores: 'Tutores: Pablo Reyes, Manuel Fereira, Cesar Martínez'
                        },
                        {
                          titleline: 'Riesgo tecnológico',
                          content: 'Esta área temática comprende la iidentificación de daños o las pérdidas potenciales que pueden presentarse debido a los eventos generados por el uso y acceso a la tecnología, este tipo riesgo se encuentra asociado a una gran cantidad de actividades de tipo industrial  propias de almacenamiento, transporte,  producción y/o transformación de sustancias y/o materiales químicos peligrosos,  combustibles, electricidad.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Cesar Martínez'
                        },
                        {
                          titleline: 'Formulación y evaluación de proyectos',
                          content: 'Esta área temática esta dirigida al desarrollo de una serie de estudios que permitan recopilar, crear y sistematizar la información con el objeto de identificar ideas de negocios y medir cuantitativamente los costos y beneficios de un eventual emprendimiento.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Cesar Martínez, Pablo Reyes'
                        },
                        {
                          titleline: 'Planes de negocio',
                          content: 'Esta área temática esta dirigida a la elaboración de planes que explique de manera detallada en qué consistirá el negocio o nuevo proyecto comercial que será emprendido. Puede estar centrado en un bien o en un servicio, se estudia el entorno de la empresa, analizando y evaluando los posibles resultados si se lograran los objetivos marcados en el proyecto, definiendo los aspectos económicos necesarios',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Cesar Martínez'
                        },
                        {
                          titleline: 'Gestión de proyectos',
                          content: 'Esta área temática desarrolla y/o aplica estrategias teóricas y prácticas para administrar, diseñar y orientar los esfuerzos dentro de un proyecto corporativo, civil, tecnológico y de cualquier índole de principio a fin.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Edgar Hernandez'
                        },
                        {
                          titleline: 'Proyectos de acondicionamiento ambiental',
                          content: 'Esta área temática ddesarrolla proyectos que permitan la modificación de los elementos de la arquitectura y el urbanismo que tienen efecto sobre los elementos del clima total.',
                          tutores: 'Tutores: Pablo Reyes, Manuel Fereira, Cesar Martínez'
                        },
                        {
                          titleline: 'Ingeniería de productos',
                          content: 'Esta área temática se encarga de las investigaciones que conllevan a la definición del procesos para el desarrollo sistemas productivos de manera tal que se obtenga un elemento apto para su comercialización mediante algún procedimiento de fabricación. Por lo general la ingeniería de producto incluye actividades relacionadas con optimizar el costo de producción, su facilidad de fabricación, su calidad y funcionalidad.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Cesar Martínez, Pablo Reyes'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Mantenimiento industrial e ingeniería de confiabilidad',
                    infovalue: [{
                      value: [
                        {
                          titleline: ' Sistemas de Mantenimiento',
                          content: 'Esta área temática comprende todas las investigaciones dirigidas a la planificación, organización y control de la gestión eficaz del mantenimiento de todo equipo e instalación de industrias manufactureras o empresas de servicio',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Cesar Martínez, Lourdes Nuñez, Yoleida Gonzalez, Maria Gómez'
                        },
                        {
                          titleline: 'Planes / Programas de mantenimiento',
                          content: 'Esta área temática desarrolla planes basados en actividades y tareas de mantenimiento programado dirigidas a un conjunto de equipos de la planta.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Cesar Martínez, Lourdes Nuñez, Yoleida Gonzalez, Maria Gómez'
                        },
                        {
                          titleline: 'Confiabilidad operacional',
                          content: 'Esta área temática esta dirigida a desarrollar y/o aplicar estrategias que alcancen una acción sinérgica del equipamiento, el recurso humano y el proceso tecnológico, para lograr que un sistema técnico complejo cumpla las funciones requeridas en un tiempo y contexto operacional determinados, minimizando los costos totales de operación y mantenimiento y aumentando la competitividad de la organización. También analiza aspectos relacionados con el uso eficiente de la información y los criterios humanos.',
                          tutores: 'Tutores: Yoleida Gonzalez, Leandro Coello, Lourdez Nuñez'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Seguridad y salud en el trabajo',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Sistemas de gestión de Seguridad y salud en el trabajo',
                          content: 'Esta área temática comprende la realización de sistemas de información debidamente documentados que serán utilizados para promover la seguridad y reducir los riesgos para los empleados en el trabajo. Lo aplica una organización para identificar, evaluar y controlar los peligros para los empleados y el público en todas las operaciones.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Cesar Martínez, Lourdes Nuñez, Daniel Gonzáles'
                        },
                        {
                          titleline: 'Programa de Seguridad y Salud en el trabajo',
                          content: 'Esta área temática se centra en el desarrollo y/o aplicación de programas bajo un enfoque legal , compuestos por un conjunto de objetivos, acciones y metodologías que se establecen para identificar, prevenir y controlar aquellos procesos peligrosos presentes en el ambiente de trabajo y minimizar el riesgo de ocurrencia de incidentes, accidentes de trabajo y enfermedades ocupacionales.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Cesar Martínez, Lourdes Nuñez, Daniel Gonzáles'
                        },
                        {
                          titleline: 'Planes de emergencia',
                          content: 'Esta área temática se centra en el desarrollo y/o aplicación de un conjunto de acciones ordenadas a realizar por el personal de la organización, en el momento que se produzca un siniestro. El objetivo final debe ser minimizar en lo posible los daños a las personas y a las instalaciones.',
                          tutores: 'Tutores: Cecilia León, Leandro Coello, Cesar Martínez, Lourdes Nuñez, Daniel Gonzáles'
                        },
                        {
                          titleline: 'Ergonomía',
                          content: 'Esta área temática esta dirigida a los estudios destinados a mejorar el trabajo, y sus sistemas, productos y ambientes para que se adapten a las capacidades y limitaciones físicas y mentales de la persona',
                          tutores: 'Tutores: Cecilia León, Maria Gómez, Daniel González'
                        }
                      ]
                    }
                    ]
                  }
                ]
              },

              {
                Title: 'Computación',
                items: [
                  {
                    newtitle: 'Ingeniería del Software',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Aplicaciones WEB',
                          content: 'Esta área se vincula al desarrollo de programas informáticos que pueden ser ejecutados desde internet, desarrollados con lenguaje soportado por los navegadores, permitiendo la facilidad de mantener y actualizar las aplicaciones sin la necesidad de distribuir e instalar. Poseen la facilidad de ser ejecutadas en múltiples plataforma.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Juan Medina, Owen Henríquez, Zulma Revilla'
                        },
                        {
                          titleline: 'Software Aplicado a telecomunicaciones',
                          content: 'Esta área va dirigida al diseño y desarrollo de aplicaciones o programas informáticos para redes en las áreas de auditoría y calidad de servicios, asimismo está relacionada con el desarrollo de aplicaciones a nivel de telefonía en cuanto a la creación de servicios y aplicaciones móviles.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez'
                        },
                        {
                          titleline: 'Desarrollo de sistemas de informacion',
                          content: 'Dirigida al desarrollo de soluciones informáticas, orientadas al tratamiento y administración de datos e información, organizados y listos para su posterior uso, generados para cubrir una necesidad o problema empresarial.',
                          tutores: 'Tutores: Luis Fernandez, Jimmy Stavisky, Rafael Escalona, Gustavo Valdeblanquez, Jose Oropeza, Juan Medina, Zulma Revilla'
                        },
                        {
                          titleline: 'Sistemas de Base de Datos',
                          content: 'El área está dirigida al diseño y desarrollo de gestores de datos en grandes cantidades de información de forma estructurada, haciendo posible acceso a los datos de forma ágiles y rápidos.',
                          tutores: 'Tutores: Andres Medina, Rafael Escalona, Gustavo Valdeblanquez, Owen Henríquez, Zulma Revilla'
                        },
                        {
                          titleline: 'Sistemas de seguridad informatica',
                          content: 'El área está orientada a desarrollar propuestas que permitan garantizar la protección de la infraestructura computacional de una organización, permitiendo brindar integridad, confidencialidad, disponibilidad, autenticación, a través de estándares, protocolos, métodos, reglas, herramientas y leyes.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Gustavo Valdeblanquez, Rafael Escalona, Owen Henríquez, Zulma Revilla'
                        },
                        {
                          titleline: 'Sistemas Inteligentes',
                          content: 'El área está enfocada al desarrollo de sistemas expertos que muestran comportamiento inteligente o interactúan de una forma más inteligente con su entorno y otros sistemas. Esta área está vinculada a la transferencia de conocimiento mediante el uso de métodos y herramientas apoyados en el área de inteligencia artificial.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez, Owen Henríquez, Zulma Revilla, Rafael Escalona'
                        },
                        {
                          titleline: 'Sistemas para vehículos',
                          content: 'Esta área temática hace referencia al diseño de infraestructura de hardware que permitan el diagnostico de fallas y pruebas en componentes electrónicos y computadoras para Vehículos, lo cual redundara en diagnósticos precisos que faciliten su reparación futura.',
                          tutores: 'Tutores: Luis Fernandez, Gusta Valdeblanquez, Jimmy Stavisky, Owen Henríquez'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Sistemas de comunicaciones teorías y modelos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Tecnología Inalámbrica',
                          content: 'Esta área temática se dirige al diseño de sistemas de computo cuyos nodos no requieren de ningún tipo de cableado o dispositivo alámbrico, aplicando conceptos de modelos de redes WPAN, WLAN, WMAN Y WWAN, de tal forma que satisfagan los requerimientos del mundo actual.',
                          tutores: 'Tutores: Gleidys Garcia, Junior Gonzáles, Owen Henríquez'
                        },
                        {
                          titleline: 'Protocolos',
                          content: 'Esta área temática se dirige al diseño o aplicación de protocolos de comunicación que permitan la interconexión de sistemas o redes de computadoras, para establecer sistemas de computo o comunicación de datos distribuidos.',
                          tutores: 'Tutores: Gleidys Garcia, Junior Gonzáles, Owen Henríquez, Luis Fernandez'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Entornos Productivos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Diseño y Configuración Redes',
                          content: 'Esta área temática se centra en el diseño de sistemas organizados donde se seleccionan las tecnologías más adecuadas para el manejo del tráfico generado por las aplicaciones informáticas, se enmarca en las capas del modelo de referencia OSI, generando de este modo investigaciones conducentes a proponer: arquitecturas, topologías, servicios basados en la red, reingenierías, entre otros.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Junior González, Juan Medina, Andres Medina, Owen Henríquez'
                        },
                        {
                          titleline: 'Redes de banda Ancha',
                          content: 'Esta área temática se centra en la elaboración de propuestas que permitan establecer redes de comunicación de datos de alta velocidad, se enmarca en las capas 1, 2, 3 y 4 del modelo de referencia OSI, generando de este modo investigaciones conducentes a proponer: redes de acceso, redes de transporte, sistemas de administración de red, sistemas de seguridad de red, sistemas de mantenimiento preventivo y correctivo de redes, reingeniería de redes.',
                          tutores: 'Tutores: Luis Fernandez, Gleidys Garcia, Junior González'
                        },
                        {
                          titleline: 'Automatización de Procesos',
                          content: 'Esta área temática se centra en el diseño de sistemas organizados donde se seleccionan las tecnologías más adecuadas para ejecutar tareas o procesos recurrentes en un negocio. Esto permite minimizar los costos, aumentar la eficiencia y agilizar procesos que son cada vez más complejos.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Juan Medina, Gustavo Valdeblanquez, Jimmy Stavisky'
                        },
                        {
                          titleline: 'Circuitos de Aplicación Especifica',
                          content: 'Esta área temática se dirige al desarrollo de soluciones eléctricas o electrónicas aplicables a problemas específicos en el área industrial o de negocio.',
                          tutores: 'Tutores: Luis Montiel, Gleidys Garcia, Junior González'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Ingeniería Biomédica',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Sistemas de realidad aumentada, virtual o mixta para la biomedicina',
                          content: 'El objetivo fundamental de esta área temática es la integración de hardware y software en la implementación de sistemas que permitan crear un ambiente totalmente artificial y/o agregar al ambiente real información virtual significativa, con el objeto de introducir al personal medico en un escenario donde realice el diagnostico o tratamiento remoto, también como la asistencia en situaciones dificultosas.',
                          tutores: 'Tutores: Gleidys Garcia, Luis Fernandez, Jimmy Stavisky, Gustavo Valdeblanquez'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Redes',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Diseño y Configuración de Redes',
                          content: 'Esta área temática esta dirigida a la formulación de proyectos que permitan la creación u optimización de redes para Computadoras que compartan tanto recursos como información, asegurando la confiabilidad, integridad y seguridad del activo información.',
                          tutores: 'Tutores: Luis Fernandez, Junior González, Gleidys Garcia'
                        },
                        {
                          titleline: 'Redes de Banda Ancha',
                          content: 'Esta área temática está orientada a desarrollar propuestas de implantación y mantenimiento de redes con grandes velocidades y múltiples servicios, para su aprovechamiento en la aplicación de Soluciones Comerciales e Industriales.',
                          tutores: 'Tutores: Luis Fernandez, Junior González, Gleidys Garcia'
                        },
                        {
                          titleline: 'Cloud Computing',
                          content: 'Esta área temática tiene como objeto el desarrollo de proyectos de investigación orientados a redes que permitan la ejecución de aplicaciones donde se requiere el acceso remoto en cualquier momento y localidad geográfica, con el fin de referenciar archivos al igual que procesar datos a través de internet , sin la necesidad de referenciar un computador personal o servidor local.',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Rafael Escalona, Gustavo Valdeblanquez'
                        },
                        {
                          titleline: 'Virtualización de Servicios',
                          content: 'Esta área temática esta dirigida a la aplicación de conceptos de virtualización en aplicaciones, servidores, almacenamiento y redes, con el propósito de crear o aplicar tecnologías que permitan reducir costos, se sustenta en el empleo de herramientas de software que imitan las características del hardware creando un sistema informático virtual.',
                          tutores: 'Tutores: Andres Medina, Luis Fernandez, Rafael Escalona, Jimmy Stavisky'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Sistemas de conversión de energías',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Conversión y ahorro de energía en sistemas de computación',
                          content: 'Esta área temática tiene como propósito el desarrollo de software y/o hardware que permita disminuir el consumo de energía en centros de computo, ya sea aplicando mejoras tecnológicas de consumo, la sustitución de energías o procesos de virtualización',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Juan Medina, Owen Henríquez'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Sistemas Inteligentes',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Computación basada en sistemas expertos',
                          content: 'Esta área temática aplica técnicas de inteligencia artificial en el desarrollo de software y hardware que basan su funcionamiento en el conocimiento almacenado proveniente de expertos en un área determinada.',
                          tutores: 'Tutores: Gustavo Valdeblanquez, Juan Medina'
                        },
                        {
                          titleline: 'Prototipos basados en inteligencia artificial',
                          content: 'Esta área temática esta dirigida a la formulación de proyectos que permitan la creación u optimización de software y hardware que sinteticen y automaticen tareas que en principio son intelectuales, para mejorar significativamente las capacidades y contribuciones humanas.',
                          tutores: 'Tutores: Gustavo Valdeblanquez, Juan Medina'
                        },
                        {
                          titleline: 'Lógica difusa',
                          content: 'Esta área temática esta dirigida a la formulación de proyectos que permitan la creación u optimización de sistemas donde la complejidad del proceso en cuestión es muy alta y no existen modelos matemáticos precisos, en procesos altamente no lineales y cuando se envuelven definiciones y conocimientos no estrictamente definidos.',
                          tutores: 'Tutores: Gustavo Valdeblanquez, Juan Medina'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Control y automatización de procesos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Instrumentación',
                          content: 'Esta área temática se dirige al diseño o implementación de sistemas y dispositivos que permitan realizar la medición, la conversión, el control o la transmisión de las variables de un cierto proceso.',
                          tutores: 'Tutores: Gustavo Valdeblanquez, Juan Medina, Luis Fernandez'
                        },
                        {
                          titleline: 'Automatización de procesos',
                          content: 'Esta área temática se dirige al diseño de sistemas y dispositivos de control que permitan sustituir técnicas manuales por técnicas automáticas de manera tal que aumente la eficiencia y precisión del proceso.',
                          tutores: 'Tutores: Gustavo Valdeblanquez, Juan Medina, Andres Medina, Jimmy Stavisky'
                        },
                        {
                          titleline: 'Eléctronica aplicada',
                          content: 'Esta área temática tiene como prioridad el desarrollo de proyectos de investigación orientados a la aplicación de conceptos teóricos en situaciones problemáticas que se presenten en todas las áreas donde sea susceptible la elaboración de propuestas de solución con dispositivos y sistemas electrónicos.',
                          tutores: 'Tutores: Gleidys Garcia, Junior González, Luis Montiel'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Tecnología e innovación agropecuaria y del ambiente',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Sistemas de bases de datos para el control agropecuario y pesquero',
                          content: 'Esta área temática tiene como prioridad el desarrollo de proyectos de investigación a la clasificación y control de especies, en referencia al manejo de factores tales características de alimentación, producción, peso, reproducción, entre otras.',
                          tutores: 'Tutores: Rafaél Escalona, Juan Medina, Jimmy Stavisky'
                        },
                        {
                          titleline: 'Sistemas de alerta climatológicos',
                          content: 'Esta área temática se dirige al desarrollo de sistemas descentralizados que permitan analizar procesos físicos, químicos y biológicos que afectan el sistema climático, con el propósito de alertar a la brevedad posible fenómenos que pudieran afectar la forma de vida humana.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez'
                        },
                        {
                          titleline: 'Sistemas de alerta sísmico',
                          content: 'Esta área temática se dirige al desarrollo de sistemas descentralizados que permitan analizar procesos físicos como movimientos tectónicos que afectan la geografía monitoreada, con el propósito de alertar a la brevedad posible fenómenos sísmicos que pudieran afectar la forma de vida humana.',
                          tutores: 'Tutores: Andres Medina, Jimmy Stavisky, Gustavo Valdeblanquez'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Proyectos de investigación, desarrollo e innovación',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Sistemas para el manejo de la investigación',
                          content: 'Esta área temática se dirige al desarrollo de software orientado a la gestión documental del proceso de investigación, donde se manejan altos volúmenes de datos que posteriormente son sistematizados a fin de que sean manejados en los procesos de tomas de decisiones, por parte de los investigadores.',
                          tutores: 'Tutores: Luis Fernandez, Jimmy Stavisky, Rafael Escalona, Jose Oropeza, Juan Medina'
                        },
                        {
                          titleline: 'TIC',
                          content: 'Esta área temática se dirige al desarrollo o aplicación de hardware y software dirigido a la integración de las telecomunicaciones y las computadoras, así como el software necesario, el middleware, almacenamiento, sistemas audiovisuales y producción audiovisual, que permiten a los usuarios acceder, almacenar, transmitir y manipular información.',
                          tutores: 'Tutores: Luis Fernandez, Jimmy Stavisky, Rafael Escalona, Juan Medina'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Videojuegos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Aplicaciones locales o distribuida',
                          content: 'Esta área temática se dirige al desarrollo de software para juegos locales o en red, de uno o múltiples jugadores, que se ejecutaran en una o múltiples plataformas de hardware.',
                          tutores: 'Tutores: Luis Fernandez, Jimmy Stavisky, Rafael Escalona, Juan Medina,Andres Medina, Jose Oropeza'
                        },
                        {
                          titleline: 'Aplicaciones móviles',
                          content: 'Esta área temática se dirige al desarrollo de software para juegos que serán ejecutados en dispositivos móviles como teléfonos, tabletas entre otros, de uno o múltiples jugadores',
                          tutores: 'Tutores: Luis Fernandez, Andres Medina, Jimmy Stavisky, Juan Medina'
                        },
                        {
                          titleline: 'Aplicaciones Web',
                          content: 'Esta área temática se dirige al desarrollo de software para juegos basados en paginas WEB, de uno o múltiples jugadores.',
                          tutores: 'Tutores: Luis Fernandez, Jimmy Stavisky, Rafael Escalona, Juan Medina, Andres Medina, Jose Oropeza, Zulma Revilla'
                        },
                        {
                          titleline: 'Consolas y accesorios',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos y sistemas que permitan el procesamiento de aplicaciones con propósitos de esparcimiento, señales interactivas provenientes de accesorios de entrada, y como resultado generar las reacciones multimedia correspondientes a la temática del juego. También los accesorios que permiten la comunicación con el usuario o jugador.',
                          tutores: 'Tutores: Gleidys Garcia, Junior González, Luis Montiel'
                        },
                        {
                          titleline: 'Realidad aumentada',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos que proyecten una información (como imágenes, gráficos, personajes, textos) en el mundo real, proporcionando una nueva visión del espacio físico con el objeto de integrar mundo real (físico) y el mundo virtual de los videojuegos.',
                          tutores: 'Tutores: Gleidys Garcia, Luis Fernandez, Jimmy Stavisky, Gustavo Valdeblanquez'
                        }
                      ]
                    }
                    ]
                  }
                ]
              },

              {
                Title: 'Electrónica mención Telecomunicaciones',
                items: [
                  {
                    newtitle: 'Entornos productivos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Dispositivos de comunicaciónes',
                          content: 'Esta área temática se centra en el diseño de dispositivos que permitan establecer comunicaciones, se enmarca en las capas 1 y 2 del modelo de referencia OSI, generando de este modo investigaciones conducentes a proponer dispositivos como: interfaces, adaptadores, multiplexores y concentradores. Así como protocolos, normas y métodos para el tratamiento de la información.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Redes de Telecomunicaciónes',
                          content: 'Esta área temática se centra en el diseño de sistemas que permitan establecer transporte de información, se enmarca en las capas 3 y 4 del modelo de referencia OSI, generando de este modo investigaciones conducentes a proponer sistemas como: redes de acceso, redes de transporte, sistemas de administración de red, sistemas de seguridad de red, sistemas de mantenimiento preventivo y correctivo de redes, reingeniería de redes.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Realidad Aumentada',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos que proyecten una información (como imágenes, gráficos, personajes, textos) en el mundo real, proporcionando una nueva visión del espacio físico con el objeto de integrar mundo real (físico) y el mundo virtual.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Ciberseguridad',
                          content: 'El objetivo fundamental de esta área temática es el desarrollo de dispositivos de seguridad por hardware tales como llaves, cortafuegos, equipos de cifrado, entre otros.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Tele robótica',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos y sistemas que permitan el control de robots a distancia como por ejemplo un vehículo no tripulado (Dron), un dispositivo medico, entre otros.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Telemedicina',
                          content: 'Esta área temática esta dirigida al desarrollo de dispositivos y sistemas de telecomunicaciones que permitan la prestación a distancia de servicios clínicos de salud.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Redes Industriales',
                          content: 'El objetivo fundamental de esta área temática es el de aplicar las técnicas del diseño de redes para la implementación de sistemas que comuniquen instrumentos y sistemas en ámbito industrial, que permitan la comunicación en tiempo real de sistemas automatizados.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Sistemas de comunicaciones teorías y modelos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Radiación y Propagación de Ondas',
                          content: 'Esta área temática se centra en el diseño de sistemas que permitan la emisión y recepción de señales al medio, se enmarca en la capa 1 del modelo de referencia OSI, generando investigaciones conducentes a proponer dispositivos como: antenas, alimentadores, componentes pasivos y activos de sistemas radiantes. De igual modo, contempla los estudios referidos a la propagación como: cobertura, espectrometría, presupuesto de enlace, interferencia, línea de vista, zonas de Fresnel, entre otros.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Modelado de Canales',
                          content: 'Esta área temática se dirige a la aplicación de modelos en el diseño de dispositivos que permitan adaptar las etapas de ecualización, codificación y modulación del sistema de comunicaciones a las características del mismo, maximizando su calidad, eficiencia espectral así como el rendimiento del sistema.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Procesamiento de señales de voz y audio',
                          content: 'Esta área temática se dirige al diseño de sistemas que permitan reducir el ruido en un canal, reconocer un patrón de voz, codificar digitalmente la voz y el audio para ser transmitidos por canales digitales, análisis y síntesis con propósitos de generación artificial, entre otros.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Ingenieria Biomédica',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Telemedicina',
                          content: 'Esta área temática esta dirigida al desarrollo de dispositivos y sistemas de telecomunicaciones que permitan la prestación a distancia de servicios clínicos de salud, generando y detectando señales que se utilizaran en el diagnostico o tratamiento de enfermedades o condiciones en un cuerpo biológico',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Señales Biomédicas',
                          content: 'Esta área temática se centra en el diseño de dispositivos que permitan generar y detectar señales que se utilizaran en el diagnostico o tratamiento de enfermedades o condiciones en un cuerpo biológico.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Redes',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Sistemas Celulares',
                          content: 'Esta área temática se centra en el diseño de redes que permitan establecer transporte de información multimedia en situaciones donde se requieren multitudinarias conexiones inalámbricas de usuarios utilizando un numero de canales de radiofrecuencia limitado, y como consecuencia se divide el área geográfica en células.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Sistemas satelitales',
                          content: 'Esta área temática se centra en el diseño de redes que permitan establecer transporte de información multimedia en situaciones donde las distancias grandes dan como consecuencia sistemas costosos de implementar y mantener usando redes terrestres y como consecuencia se pueden utilizar repetidores espaciales para disminuir costos de implementación y mantenimiento.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Protocolos',
                          content: 'Esta área temática se dirige al diseño o aplicación de protocolos de comunicación que permitan la interconexión de sistemas o redes de computadoras.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Gestión de Redes',
                          content: 'Esta área temática tiene como objeto el desarrollo de proyectos de investigación que implementen sistemas de administración de las redes de telecomunicaciones mediante aplicaciones informáticas que permitan controlar, supervisar, recopilar datos, analizar datos y generar informes para el mantenimiento preventivo y correctivo de la red.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Sistemas de conversión de energías',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Transmisión y distribución de energía',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos y sistemas que permitan transferir energía para la alimentación de otros dispositivos de forma inalámbrica con el objeto de mantenerlos operando o recargar sus baterías.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Estaciones basadas en energía alternativa',
                          content: 'Esta área temática se centra en el diseño de sistemas de potencia basados en energías como la fotovoltaica, eólica, entre otras que permitan sustituir energías no renovables en la operación de estaciones de telecomunicaciones.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Sistemas Inteligentes',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Recuperación automática de conexiones',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos y sistemas que aplicando técnicas de la inteligencia artificial puedan recuperar las conexiones en sistemas de comunicaciones que presenten fallas de forma automática.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Diagnostico con sistemas expertos',
                          content: 'Esta área temática aplica técnicas de inteligencia artificial en el desarrollo de dispositivos que realizaran un diagnostico inteligente, basándose en el conocimiento almacenado generalmente proveniente de expertos en el área de las telecomunicaciones',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Control y automatización de procesos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Diagnostico automatizado de estaciones',
                          content: 'Esta área temática tiene como objeto el desarrollo de proyectos de investigación orientados a la automatización de procesos de monitoreo, diagnostico y mantenimiento preventivo o correctivo de estaciones remotas de telecomunicaciones tanto en tierra como extra terrestres.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Sistemas de control automático de señales',
                          content: 'El objetivo fundamental de esta área temática es el de aplicar las técnicas de control y técnicas computacionales en el desarrollo de sistemas electrónicos dirigidos a mantener las señales ya sea de radiofrecuencia u ópticas dentro de los rangos de funcionamiento establecidos.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Sistemas de control remoto',
                          content: 'Esta área temática se dirige al desarrollo de dispositivos que permitan el control a distancias de procesos utilizando radiofrecuencia, ondas sonoras o enlaces ópticos.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Electrónica aplicada',
                          content: 'Esta área temática tiene como prioridad el desarrollo de proyectos de investigación orientados a la aplicación de conceptos teóricos en situaciones problemáticas que se presenten en todas las áreas donde sea susceptible la elaboración de propuestas de solución con dispositivos y sistemas electrónicos.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Tecnología e innovación agropecuaria y del ambiente',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Redes aplicadas a entornos agropecuarios y pesqueros',
                          content: 'El objetivo fundamental de esta área temática es el de aplicar las técnicas del diseño de redes para la implementación de sistemas que comuniquen instrumentos y sistemas en el ámbito agrícola, con el propósito de recopilar información y controlar la operación, en harás de optimizar la producción.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Sistemas predictivos basados en variables climáticas',
                          content: 'Esta área temática se dirige al desarrollo de sistemas descentralizados que permitan analizar procesos físicos, químicos y biológicos que afectan el sistema climático, con el propósito de estudiar la dinámica del sistema meteorológico y climático, y de esta forma proyectar el clima futuro.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Proyectos de investigación, desarrollo e innovación',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Desarrollo de nuevas tecnologías',
                          content: 'Esta área temática se dirige a la creación de tecnologías innovadoras que permitan optimizar la operación y mantenimiento de sistemas dirigidos a las telecomunicaciones.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Creación de tecnología endógena',
                          content: 'Esta área temática se dirige a la creación de tecnologías que permitan sustituir aquellas tecnologías propias de otros países reduciendo de esta manera la dependencia tecnológica y favoreciendo la reducción de costos en la implementación y mantenimiento de los sistemas',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'TIC',
                          content: 'Esta área temática se dirige al desarrollo o aplicación de sistemas electrónicos dirigidos a la integración de las telecomunicaciones y las computadoras, así como el software necesario, el middleware, almacenamiento, sistemas audiovisuales y producción audiovisual, que permiten a los usuarios acceder, almacenar, transmitir y manipular información.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Videojuegos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Consolas y accesorios',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos y sistemas que permitan el procesamiento de aplicaciones con propósitos de esparcimiento, señales interactivas provenientes de accesorios de entrada, y como resultado generar las reacciones multimedia correspondientes a la temática del juego. También los accesorios que permiten la comunicación con el usuario o jugador.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Accesorios inalámbricos',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos que reciban señales interactivas provenientes de accesorios de entrada, y/o genere las respuestas físicas que son enviadas por las consolas de videojuegos, convirtiéndose en la interface hombre maquina.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Realidad aumentada',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos que proyecten una información (como imágenes, gráficos, personajes, textos) en el mundo real, proporcionando una nueva visión del espacio físico con el objeto de integrar mundo real (físico) y el mundo virtual.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                        {
                          titleline: 'Protocolos',
                          content: 'Esta área temática se dirige al diseño o aplicación de protocolos de comunicación que permitan la interconexión de sistemas o redes de computadoras, para establecer sistemas videojuegos en red.',
                          tutores: 'Tutores: Junior González, Anelaina Urdaneta, Massiel Marcano, Gleidys García'
                        },
                      ]
                    }
                    ]
                  }
                ]
              },

              {
                Title: 'Electrónica mención Automatización y Control',
                items: [
                  {
                    newtitle: 'Entornos productivos',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Conversión y Control de Energía',
                          content: 'Esta área temática tiene como propósito la aplicación de teorías y modelos en el diseño de dispositivos o sistemas que permitan convertir la energía de una forma a otra que pueda ser aprovechable, para ser distribuida o almacenada de forma controlada.',
                          tutores: 'Tutores: Luis Montiel, Juan Fernandez, Rubén Carillo, Francisco Parra'
                        },
                        {
                          titleline: 'Robótica',
                          content: 'El objetivo fundamental de esta área temática es el de aplicar las técnicas de control y técnicas computacionales en la resolución de problemas ingenieriles, asociadas a sistemas automatizados. En este caso se aborda la constitución de una célula de trabajo robotizada la cual implica el diseño, simulación y construcción de sistemas de control para manipuladores mecánicos que ejecutan tareas programables.',
                          tutores: 'Tutores: Luis Montiel, Franciso Parra'
                        },
                        {
                          titleline: 'Control Distribuido',
                          content: 'Esta área temática se dirige al diseño de sistema y dispositivos de control donde los elementos a controlar tienen su propio controlador conectado a una red que permita una supervisión central, de manera tal que aumente su eficiencia y precisión',
                          tutores: 'Tutores: Luis Montiel, Juan Fernandez, Rubén Carillo, Francisco Parra'
                        },
                        {
                          titleline: 'Mecatrónica',
                          content: 'Esta área temática se dirige al diseño de sistema que requieren un proceso de integración de tecnologías de las disciplinas mecánica, electrónica, control e informática, y que serán aplicados en la industria, automotriz, aeronáutica, manufactura, entre otras.',
                          tutores: 'Tutores: Luis Montiel, Juan Fernandez, Rubén Carillo, Francisco Parra'
                        },
                        {
                          titleline: 'Redes Industriales',
                          content: 'El objetivo fundamental de esta área temática es el de aplicar las técnicas del diseño de redes para la implementación de sistemas que comuniquen instrumentos y sistemas en ámbito industrial, que permitan la comunicación en tiempo real de sistemas automatizados.',
                          tutores: 'Tutores: Rubén Carillo, Francisco Parra'
                        },
                        {
                          titleline: 'Tele robótica',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos y sistemas que permitan el control de robots a distancia como por ejemplo un vehículo no tripulado (Dron), un dispositivo medico, entre otros.',
                          tutores: 'Tutores: Rubén Carillo, Francisco Parra'
                        },
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Ingeniería biomédica',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Biomedicina',
                          content: 'El objetivo fundamental de esta área temática es el de aplicar las técnicas de control y técnicas computacionales para desarrollar dispositivos que apoyen el estudio de los aspectos biológicos de la medicina. Para ello, analiza los factores celulares, genéticos, moleculares y bioquímicos del cuerpo humano y las enfermedades que este puede sufrir y los utiliza como requerimientos en su diseño.',
                          tutores: 'Tutores: Luis Montiel, Francisco Parra'
                        },
                        {
                          titleline: 'Prototipos Biomédicos',
                          content: 'Esta área temática se centra en el desarrollo de dispositivos médicos con aplicaciones clínicas para la monitorización de los pacientes y el diagnóstico médico. Esto implica el uso de tecnologías de procesamiento de señales, transmisión de datos, almacenamiento y visualización. También involucra el desarrollo de sistemas que apliquen inteligencia artificial para el cuidado de la salud, dispositivos portátiles y sistemas de vigilancia de parámetros médicos.',
                          tutores: 'Tutores: Luis Montiel, Francisco Parra'
                        },
                        {
                          titleline: 'Procesamiento de imagénes',
                          content: 'Esta área temática se centra en la creación de dispositivos y sistemas electrónicos que sean capaces de recibir, procesar y transmitir información utilizando procesamiento de señales, el procesamiento de imágenes médicas, la visión por computadora, la detección de objetos, la identificación de patrones, la programación de algoritmos y la detección de movimiento.',
                          tutores: 'Tutores: Luis Montiel, Francisco Parra, Rubén Carillo'
                        },
                        {
                          titleline: 'Sistemas de sensoress',
                          content: 'Esta área temática se enfoca en la creación de sistemas de sensores que sean capaces de detectar, identificar y medir una amplia gama de variables físicas, como la temperatura, presión, humedad, movimiento, entre otras, así como el desarrollo de sensores basados en polímeros conductores y en la creación de tecnologías y dispositivos inteligentes para la medición y el control de variables en entornos físicos.',
                          tutores: 'Tutores: Luis Montiel, Francisco Parra, Rubén Carillo, Juan Fernandez'
                        },
                        {
                          titleline: 'Ingeniería de Rehabilitación',
                          content: 'Esta área temática esta dirigida al desarrollo de dispositivos tecnológicos para asistir a las personas con discapacidades, y/o para ayudar a la recuperación de las funciones físicas y cognitivas perdidas debido a una enfermedad o lesión.',
                          tutores: 'Tutores: Luis Montiel, Francisco Parra, Rubén Carillo, Juan Fernandez'
                        },
                        {
                          titleline: 'Robótica Asistencial',
                          content: 'El objetivo fundamental de esta área temática es el de aplicar las técnicas de control y técnicas computacionales en el diseño de robots que permitan asistir en cirugías o tratamientos médicos, así como el apoyo a personas con discapacidades.',
                          tutores: 'Tutores: Luis Montiel, Francisco Parra, Rubén Carillo'
                        }
                      ]
                    }
                    ]
                  },
                  {
                    newtitle: 'Redes',
                    infovalue: [{
                      value: [
                        {
                          titleline: 'Tele robótica',
                          content: 'Esta área temática tiene como propósito el desarrollo de dispositivos y sistemas que permitan el control de robots a distancia como por ejemplo un vehículo no tripulado (Dron), un dispositivo medico, entre otros. Esto incluye el desarrollo de tecnologías de robótica móvil, telerobótica, teleoperación, inteligencia artificial, aprendizaje automático, visión computacional y sistemas de control.',
                          tutores: 'Tutores: Rubén Carillo, Francisco Parra'
                        },
                        {
                          titleline: 'Redes para sistemas de control distribuido',
                          content: 'Esta área temática se dirige al diseño de redes para interconectar dispositivos que tienen su propio controlador de manera que permita una supervisión central, constituyéndose en un sistema de control distribuido.',
                        },
                        {
                          titleline: 'SCADA',
                          content: 'Esta área temática tiene como objeto el desarrollo de proyectos de investigación que involucren procesos productivos que requieran controlar, supervisar, recopilar datos, analizar datos y generar informes de actividades locales y/o remotas, basadas en aplicaciones informáticas en una unidad central interconectada con instrumentos llamados de campo como son los autómatas programables (PLC) y las unidades terminales remotas (RTU).',
                          tutores: 'Tutores: Rubén Carillo, Francisco Parra, Luis Montiel, Juan Fernandez'
                        },
                        {
                          titleline: 'Redes industriales',
                          content: 'El objetivo fundamental de esta área temática es el de aplicar las técnicas del diseño de redes para la implementación de sistemas que comuniquen instrumentos y sistemas en ámbito industrial, que permitan la comunicación en tiempo real de sistemas automatizados.',
                          tutores: 'Tutores: Rubén Carillo, Francisco Parratitleline'
                        }
                      ]
                    }
                    ]
                  }
                ]
              },
            ],
          },

          {
            title: 'Archivos principales',
            files: [
              { name: 'Solicitud de ingreso de materiales y equipos', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Solicitud-de-ingreso-de-materiales-y-equipos.docx', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Esquema de trabajo', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Esquema-de-trabajo-ingenieria.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Formato del Capítulo I', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Formato-del-Capítulo-I.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Formato del Capítulo II', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Formato-del-Capítulo-II.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Formato del Capítulo III', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Formato-del-Capítulo-III.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Formato del Capítulo IV', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Formato-del-Capítulo-IV.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' }
            ]
          },
          {
            title: 'Seminario de Investigación I',
            files: [
              { name: 'Planificación Académica', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-I/planificacion-academica-seminario-inv-I.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Compromiso Académico', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-I/compromiso-academico.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Tríptico Instructivo', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-I/TRIPTICO-1.pptx', icoUrl: this.CDN + '/icons/docs/ppt.svg' },
              { name: 'Informe Preliminar', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-I/informe-preliminar.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Segunda Entrega', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-I/segunda-entrega.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' }
            ]
          },
          {
            title: 'Seminario de Investigación II',
            files: [
              { name: 'Planificación Académica', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-II/planificacion-academica-sem-inv-II.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Compromiso Académico', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-II/compromiso-academico.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Tríptico Instructivo', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-II/TRIPTICO-2.pptx', icoUrl: this.CDN + '/icons/docs/ppt.svg' },
              { name: 'Informe II', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-II/informe-II.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Segunda Entrega', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-II/segunda-entrega.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' }
            ]
          },
          {
            title: 'Seminario de Investigación III',
            files: [
              { name: 'Planificación Académica', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-III/planificacion-academica-sem-inv-III.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Compromiso Académico', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-III/compromiso-academico.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Tríptico Instructivo', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-III/TRIPTICO-3.pptx', icoUrl: this.CDN + '/icons/docs/ppt.svg' },
              { name: 'Formatos para la Defensa', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-III/formatos-para-la-defensa.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Normativa para la elaboración de tomo digital', link: this.CDN + '/documents/coordinacion-teg/ingenieria/Seminario-III/normativa-para-la-elaboracion-de-tomo-digital.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
            ]
          }
        ],
        backgroundImage: `${this.CDN}/images/careers/ingenieria.jpg`
      },
      {
        title: 'Humanidades y Educación',
        infoMultiLine: [
          'Haber aprobado 171 unidades crédito',
          'Faltarle tres (3) períodos para graduarse. Haber aprobado Ingles V y Servicio Comunitario',
        ],
        fileGroups: [
          {
            title: 'Archivos principales',
            files: [
              { name: 'Esquema de Trabajo', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/humanidades.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Esquema de Trabajo', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/humanidades.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Planificación Académica', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/planificacion-academica-enero-abril-2023.docx', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Planificación Académica', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/planificacion-academica-enero-abril-2023.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Normativa Comité Académico', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/planilla-com-primer-avance.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Normativa Comité Académico', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/normas-comite-humanidades.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Criterios de Evaluación del Comité Académico', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/criterios-comite-humanidades.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Control de asistencia', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/control-de-asistencia.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Formato reuniones', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/formato-reuniones.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Formato de Solicitud de prórroga', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/solicitud-de-prorroga.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Carta modelo para cambio de título y objetivos', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/modelo-cambio-titulo-objetivos.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Solicitud para carta de Presentación', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/solicitud-carta-presentacion.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Autorización de la empresa para el TEG', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/autorizacion-de-la-empresa-para-hacer-teg-13-07-05.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' }
            ]
          },
          {
            title: 'Seminario de Investigación I',
            files: [
              { name: 'Presentación de Seminario de Investigación I', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/presentacion-seminario-de-investigacion-i.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Presentación de Seminario de Investigación I', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/presentacion-seminario-de-investigacion-i.ppt', icoUrl: this.CDN + '/icons/docs/ppt.svg' },
              { name: 'Aceptación Y Constancia De Tutoría Académica Para Alumnos De Seminario De Investigación I', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/aceptacion-y-constancia-de-tutoria-academica-seminario-de-investigacion-i.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Planilla a Comité - Primer avance', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/entrega-primer-avance.docx', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Planilla a Comité - Segundo avance', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/entrega-segundo-avance.docx', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Planilla a Comité - Tercer avance', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/entrega-tercer-avance.docx', icoUrl: this.CDN + '/icons/docs/doc.svg' },
            ]
          },
          {
            title: 'Seminario de Investigación II',
            files: [
              { name: 'Presentación de Seminario de Investigación II', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/presentacion-seminario-de-investigacion-ii.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Presentación de Seminario de Investigación II', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/presentacion-seminario-de-investigacion-ii.ppt', icoUrl: this.CDN + '/icons/docs/ppt.svg' },
              { name: 'Asignación De Horario Del Tutor Académico Para Alumnos De Seminario De Investigación II', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/aceptacion-y-constancia-de-tutoria-academica-seminario-de-investigacion-ii.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Cuarto avance (instrumento)', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/entrega-cuarto-avance.docx', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Quinto avance (cap 3 final)', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/entrega-quinto-avance.docx', icoUrl: this.CDN + '/icons/docs/doc.svg' },
            ]
          },
          {
            title: 'Seminario de Investigación III',
            files: [
              { name: 'Cronograma de Defensas Marzo - Abril 2017', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/defensas.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Presentación de Seminario de Investigación III', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/presentacion-seminario-de-investigacion-iii.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Presentación de Seminario de Investigación III', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/presentacion-seminario-de-investigacion-iii.ppt', icoUrl: this.CDN + '/icons/docs/ppt.svg' },
              { name: 'Asignación De Horario Del Tutor Académico Para Alumnos De Seminario De Investigación III', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/aceptacion-y-constancia-de-tutoria-academica-seminario-de-investigacion-iii.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Formato de Autorización para defensas por parte de Tutores', link: this.CDN + '/documents/coordinacion-teg/humanidades-y-educacion/autorizacion-defensas-tutores.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
            ]
          }
        ],
        backgroundImage: `${this.CDN}/images/careers/humanidades-educacion.jpg`
      },
      {
        title: 'Ciencias Administrativas',
        infoMultiLine: [
          'Haber aprobado 171 unidades crédito',
          'Faltarle tres (3) períodos para graduarse. Haber aprobado Ingles V y Servicio Comunitario',
        ],
        fileGroups: [
          {
            title: 'Archivos principales',
            files: [
              { name: 'Esquema de trabajo', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/cs-administrativas.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Esquema de trabajo', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/cs-administrativas.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Planilla de control de asistencia', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/planilla-de-control-de-asistencia-en-blanco.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Consignación de Informes', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/Consignacion-de-informe.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Presentación de la catedra', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/presentacion-de-la-catedra.ppt', icoUrl: this.CDN + '/icons/docs/ppt.svg' },
              { name: 'Áreas temáticas de investigación', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/areas-tematicas-de-Investigacion-fac-cs-administrativas-2016.ppt', icoUrl: this.CDN + '/icons/docs/ppt.svg' },
              { name: 'Conectores', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/6-conectores-seminario-i.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Lista de verbos', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/7-lista-de-verbos-seminario-i.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
            ]
          },
          {
            title: 'Seminario de Investigación I',
            files: [
              { name: 'Planificación académica', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/planificacion-academica-seminario-i.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Tríptico informativo', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/1-triptico-seminario-i.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Reglamento de T.E.G.', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/2-reglamento-de-teg-capitulo-v.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Solicitud para cartas presentación', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/3-solicitud-para-cartas-de-presentacion-seminario-i.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Portada para entrega a comité', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/4-portada-para-entregar-al-comite-seminario-i-copia.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Consignación de título', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/8-consignacion-de-titulo-seminario-i.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
            ]
          },
          {
            title: 'Seminario de Investigación II',
            files: [
              { name: 'Planificación Académica', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/planificacion_academica_seminario_ii.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Tríptico Informativo', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/triptico-proyecto-ii.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Procedimiento para validación', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/procedimiento-para-validacion.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Autorización para validación', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/autorizacion-para-validacion-seminario-ii.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
            ]
          },
          {
            title: 'Seminario de Investigación III',
            files: [
              { name: 'Planificación académica', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/planificacion_academica_seminario_iii.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Tríptico Informativo', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/triptico-proyecto.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Esquema de Exposición', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/esquema-de-exposicion-de-seminario-iii.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Formato para revisión', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/formato-revision.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Tomo de Fotocopias para Defensas', link: this.CDN + '/documents/coordinacion-teg/ciencias-administrativas/tomo-fotocopias-para-defensas.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
            ]
          }
        ],
        backgroundImage: `${this.CDN}/images/careers/administracion.jpg`
      },
      {
        title: 'Ciencias Jurídicas y Políticas',
        infoMultiLine: [
          'Haber aprobado 189 unidades crédito',
          'Faltarle tres (3) períodos para graduarse. Haber aprobado Ingles V y Servicio Comunitario',
        ],
        fileGroups: [
          {
            title: 'Archivos principales',
            files: [
              { name: 'Esquema general de la catedra de seminario', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/esquema-general-de-la-catedra-de-seminario.docx', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Esquema general de la catedra de seminario', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/esquema-general-de-la-catedra-de-seminario.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' }
            ]
          },
          {
            title: 'Seminario de Investigación I',
            files: [
              { name: 'Planificación Académica', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/Seminario-i-planificacion-academica-enero-abril-2023-pregrado.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Líneas de Investigación de Derecho', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/lineas-de-investigacion-areas-tematicas-y-tutores-academicos-ago-dic-2022.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Planilla Registro de Equipos', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/planilla-registro-de-equipo.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Información General de la Cátedra de Seminario I', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/1-informacion-general-de-la-catedra-de-seminario-i.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Tríptico', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/teg-derecho-triptico-actualizado.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Presentación de Título', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/5-presentacion-de-titulo.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Presentación de Título', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/5-presentacion-de-titulo.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Planilla Informe Preliminar', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/6-informe-preliminar.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Planilla Informe Preliminar', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/6-informe-preliminar.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Capítulo I', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/7-capitulo-i.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Capítulo I', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/7-capitulo-i.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Planilla Solicitud de Cambios', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/8-solicitud-de-cambios.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Planilla Solicitud de Cambios', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/8-solicitud-de-cambios.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Formato de Control de Asistencia', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/9-formato-control-de-asistencia.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' }
            ]
          },
          {
            title: 'Seminario de Investigación II',
            files: [
              { name: 'Planificación Académica', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/Seminario-ii-planificacion-academica-enero-abril-2023-pregrado.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Avances Teóricos', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/2-avances-teoricos.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Capítulo II', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/3-capitulo-ii.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Capítulo II', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/3-capitulo-ii.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Instrumento de Validez-Capítulo III', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/3-planilla-instrumento-de-validez.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Guía Instrumento de Validez', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/4-guia-del-instrumento-validez.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Cuadro para la Construcción - Validación del Instrumento', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/5-cuadro-construccion-validacion-del-intrum.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' }
            ]
          },
          {
            title: 'Seminario de Investigación III',
            files: [
              { name: 'Planificación Académica', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/Seminario-iii-planificacion-academica-enero-abril-2023-pregrado.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Información General de la Cátedra de Seminario III', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/1-informacion-general-de-la-catedra-de-seminario-iii.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Resultados - Capítulo IV', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/3-capitulo-iv-resultados.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Resultados - Capítulo IV', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/3-capitulo-iv-resultados.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Planilla Autorizacion Para Defensa', link: this.CDN + '/documents/coordinacion-teg/ciencias-juridicas-y-politicas/planilla-autorizacion-para-defensa.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' }
            ]
          }
        ],
        backgroundImage: `${this.CDN}/images/careers/ciencias-juridicas-politicas.jpg`
      },
      {
        title: 'Ciencias de la informática',
        infoMultiLine: [
          'Haber aprobado 171 unidades crédito',
          'Faltarle tres (3) períodos para graduarse. Haber aprobado Ingles V y Servicio Comunitario',
        ],
        fileGroups: [
          {
            title: 'Archivos principales',
            files: [
              { name: 'Esquema de trabajo', link: this.CDN + '/documents/coordinacion-teg/ciencias-de-la-informatica/diseno.doc', icoUrl: this.CDN + '/icons/docs/doc.svg' },
              { name: 'Esquema de trabajo', link: this.CDN + '/documents/coordinacion-teg/ciencias-de-la-informatica/diseno.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' },
              { name: 'Defensa efectiva', link: this.CDN + '/documents/coordinacion-teg/ciencias-de-la-informatica/defensas-es.pdf', icoUrl: this.CDN + '/icons/docs/pdf.svg' }
            ]
          }
        ],
        backgroundImage: `${this.CDN}/images/careers/ciencias-informatica.jpg`
      }
    ];

    this.infoSeccion = [
      {
        title: 'Evaluación',
        multiLine: [
          `Los criterios utilizados para establecer el proceso de evaluación están regidos por lo dispuesto en la reglamentación
          de la Universidad, por ello que la evaluación se caracteriza por ser continua, integral y cooperativa. La cátedra se
          evaluará utilizando los siguientes instrumentos: registro de exposiciones, informes parciales y finales, participación
          grupal, asistencia, entre otros, entregando a los facilitadores avances hechos en clase e informes con las fases
          completas. El proceso para la realización del Trabajo Especial de Grado es instrumentado a través de: La coordinación
          de trabajo especial de grado: Es una unidad encargada de planificar, dirigir, organizar y supervisar el desarrollo de
          los trabajos especiales de grado por parte de los estudiantes de cada facultad, brindando apoyo tanto a profesores como
          estudiantes en esta materia.`,

          `El comite académico: Es un órgano encargado de revisar y aprobar los títulos, objetivos y descripción del problema de
          los trabajos manejados por los estudiantes, a objeto de verificar su consonancia con el perfil profesional, las áreas
          temáticas de cada Escuela, su relevancia científica, coherencia metodológica y técnica, así como su factibilidad. Realiza
          sugerencias de carácter teórico y metodológico, siendo sus resoluciones de obligatorio acatamiento por estudiantes y
          facilitadores.`,

          `Facilitadores: La cátedra esta conformada por dos facilitadores, un experto en el área temática (contenido) y otro
          metodológico, que orientan la elaboración del trabajo.`
        ]
      },
      {
        title: 'Contacto',
        multiLine: [
          `Teléfonos: (0261) 200 8641 - 200 8634`,
          `Ubicación: Bloque G, Segundo Piso.`,
          `Horario: Lunes a viernes, 8:00 a.m. - 08:30 p.m.`
        ]
      }
    ];

    this.subNavBarItems = [
      { label: 'Descargas', path: '...' },
      { label: 'Trabajo Especial de Grado', path: '...' },
      { label: 'Evaluación', path: '...' },
    ];
  }

  ngOnInit(): void {
    this.title.setTitle('Trabajo Especial de Grado - Coordinación TEG');
  }
}