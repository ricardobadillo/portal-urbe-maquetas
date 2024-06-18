// Angular.
import { Component, OnInit } from '@angular/core';

// Modelos.
import { CareersInformation } from '../../../../../../../../core/models/careers-info';
import { LinkItem } from '../../../../../../../../core/models/links';
import { Pensum } from '../../../../../../../../core/models/pensum';
import { PresentationCardItem } from '../../../../../../../../core/models/presentation.card';

// Servicios.
import { EstudiosService } from '../../../../../../../../core/services/estudios.service';
import { MessageService } from '../../../../../../../../core/services/message.service';



@Component({
  selector: 'app-ciencias-educacion',
  templateUrl: './ciencias-educacion.component.html',
})
export class CienciasEducacionComponent implements OnInit {

  public careersInformation!: CareersInformation;
  public formatFilesURL = 'https://cdn.urbe.edu/portal-urbe/documents/facultades';
  public pensum!: Pensum;
  public downloadsNav!: LinkItem[];

  // Aside nav.
  public contactsNav!: LinkItem[];
  public scheduleNav!: LinkItem[];
  public presentationData!: PresentationCardItem[];


  constructor(private estudiosService: EstudiosService, private messageService: MessageService) {
    this.careersInformation = {
      imageUrl: 'https://cdn.urbe.edu/portal-urbe/images/studies/postgrade/doc-cs.edu.jpg',
      title: 'Ciencias de la Educación',
      mention: 'Coordinador: Dr. Johan Urdaneta',
      modality: 'Presencial',
      purpose: [
        `Egresar doctores en el área de elevadas competencias cognitivas, procedimentales y actitudinales orientadas hacia la producción científica con el rigor académico correspondiente y con pertinencia social en el ámbito del Sistema Escolar y Sistema Educativo.`,
      ],

      academicRegime: [
        `El programa consta de seis (6) períodos semestrales consecutivos con una duración de catorce (14) semanas cada uno. Los cursos o seminarios pueden dictarse mediante el régimen normal o en forma intensiva de acuerdo a la disponibilidad horaria de los docentes.`,
        `El cursante debe inscribirse en todas las actividades académicas obligatorias pautadas para cada semestre, mantener un promedio ponderado de (15) puntos y cumplir con las normas establecidas en el Reglamento General de Investigación y de Estudio para Graduados.        `,
      ],

      professionalProfile: [
        `El programa de estudios está dirigido a profesionales graduados a nivel de educación superior en el área de las Ciencias de la Educación.`,
      ],

      professionalProfileGraduate: [
        `El egresado del Doctorado Ciencias de la Educación debe poseer las siguiente competencias:`,
        `- Capacidad analítica para la interpretación de teorías y paradigmas que fundamentan la producción de conocimiento con rigor científico y pertinencia social en la Ciencia de la Educación y disciplinas afines.`,
        `- Habilidades, destrezas cognitivas y procedimentales para la comprensión y el análisis de necesidades y tendencias educativas, en el contexto de las nuevas necesidades sociales, económicas, culturales y socio-políticas en América.`,
        `- Dominio de procesos y metodologías de aprendizajes, contextualizadas en las nuevas tecnologías de la información y la comunicación.`,
        `- Competencias para el desarrollo de la investigación científica y la investigación formativa y su relación con el entorno socio-educativo.`,
        `- Manejo teórico conceptual y operacional del Sistema Educativo y el Sistema Escolar y su función en la democratización del saber y la formación de ciudadanía.`,
        `- Destrezas técnicas, administrativas e innovadoras para la planificación estratégica, en el ámbito del Subsistema de Educacíon Básica y el Subsistema de Educación Universitaria.`,
        `- Actitudes reflexivas y propositivas en la concepción de la conservación del ambiente, las normas de convivencia y el desarrollo humano, mediante la observancia de los valores, principios y fines educativos de la nación.`,
        `- Disposición para el diseño y desarrollo de programas, proyectos y publicacionesde acción derivados de procesos de investigación y la formación de equipos interdisciplinarios, con sentido general.`,
      ],

      entryRequirements: [
        `- Poseer título universitario otorgado por una Universidad reconocida, en alguna rama del conocimiento de las mencionadas en el Perfil de Ingreso.`,
        `- Sostener entrevista con el Comité Académico del Programa.`
      ],

      deliveries: [
        `- Sinopsis curricular con anexos probatorios de actividades académicas y de investigación.`,
        `- Consignación de soportes probatorios que evidencian experiencia en investigación (libros, artículos científicos publicados en revistas indexadas y/o ponencias en eventos científicos nacionales e internacionales).`,
        `- Fondo negro del título del estudio de Postgrado (Especialidad o Maestría certificado por la Universidad de egreso. En caso de la Especialidad, debe tener un mínimo de treinta y dos (32) Unidades de crédito)`,
        `- Original y fotocopia de las notas certificadas de estudio de Postgrado (Especialidad y/o Maestría) certificado por la Universidad de egreso.`,
        `- Original y fotocopia de la partida de nacimiento.`,
        `- Foto tipo Carnet (resolución de 300px 300 ppp (puntos por pulgada), con fondo blanco)`,
      ],

      critaria: [
        `- Aprobación del protocolo o proyecto del aspirante por parte del cómite académico.`,
        `- Evaluación de las credenciales académicas y profesionales presentadas en el currículo vitae con anexos probatorios por parte del aspirante.`,
        `- Aprobación de la entrevista con el Coordinador(a) del Programa.`,
        `- Pago de aranceles (preinscripción).`,
        `- Mostrar interés y tener las compentencias necesarias establecidas para el ingreso al programa.`,
      ],

      graduationRequirements: [
        `- Haber aprobado la totalidad de las unidades de creditos correspondientes.        `,
        `- Presentar, defender y aprobar el Trabajo de Grado.`,
        `- Demostrar dominio instrumental del idioma inglés`,
        `- Cumplir con la presentación de dos (02) artículos científicos publicados en revistas o eventos científicos nacionales o internacionales.`,
        `- Cumplir con la presentación de (01) artículo publicable relacionado con la temática de investigación.`,
        `- Los participantes extranjeros deberán consignar adicionalmente: Fotocopi­as del pasaporte donde se evidencie mínimo (06) sellos de entrada y salida emanados por control migratorio fronterizo.`,
      ],

      otherCountries: [
        `- Poseer título universitario otorgado por una Universidad reconocida de Especialista o Magister, en alguna rama del conocimiento de las mencionadas en el perfil de ingreso.`,
        `- Sostener entrevista con el comité académico del programa.`,
        `- Sinopsis curricular.`,
        `- Fondo Negro del título del estudio de Especialista o Magister certificado por la Universidad de egreso y debidamente apostillado según Convenio de la haya o legalizado.`,
        `- Original y fotocopia de las Notas certificadas del estudio de Especialista o Magister por la Universidad de egreso y apostilladas según Convenio de la haya o legalizado`,
        `- Fotocopia del Pasaporte Visado vigente (Si su país requiere visa)`,
        `- Original y fotocopia del registro civil o de la partida de nacimiento`,
        `- Foto tipo Carnet (resolución de 300px 300 ppp (puntos por pulgada), con fondo blanco)`,
      ],

      permanenceRequirements: [
        `- El cursante debe inscribirse en todas las actividades académicas de investigación y extensión obligatorias pautadas para cada semana`,
        `- Mantener un promedio ponderado de 15 puntos en el semestre.`,
        `- Cumplir con las normas establecidas en la normativa nacional así como también el Reglamento General de Investigación de la Universidad.`,
        `- Asistir a las tutorías y seminarios que se establezcan en las diferentes asignaturas.`,
        `- Asistir a las tutorías y seminarios que se establezcan para la elaboración de su tesis doctoral.`,
        `- Participar en la programación y realización de actividades de extensión e investigación conexas a las asignaturas del programa.`,
        `- Mantener una conducta personal, ética y profesional intachable.`,
        `- No presentar en cada cátedra un porcentaje de inasistencia superior al 25%.`,
        `- En el caso de los extranjeros, deben asistir por lo menos a dos encuentros presenciales durante el semestre.`,
      ],

      getTitle: `Doctor en Ciencias de la Educación`,
      link: true
    }

    this.contactsNav = [
      {
        label: 'johan.urdaneta@urbe.edu',
        imageUrl: 'https://cdn.urbe.edu/portal-urbe/icons/round-icons/blue-user.svg',
      },
    ];

    this.presentationData = [
      {
        title: 'Dr. Johan Urdaneta',
        img: { url: 'https://cdn.urbe.edu/portal-urbe/images/coordinators/johan-urdaneta.jpg', altText: 'Fotografía' },
        paragraph: 'Coordinador de Ciencias de la Educación'
      }
    ];

    this.downloadsNav = [
      {
        label: "Pensum",
        path: `${this.formatFilesURL}/doctorados/ciencias-educacion.pdf`,
        imageUrl: "https://cdn.urbe.edu/portal-urbe/icons/docs/pdf.svg"
      },
    ]
  }

  ngOnInit(): void {
    this.estudiosService.getCareerPensum(35).subscribe({
      next: (pensum: Pensum) => {
        this.pensum = pensum;
      },

      error: () => {
        this.messageService.show(5000, 'No se pudo obtener el pensum de estudio', 'message-error');
      }
    });
  }
}
