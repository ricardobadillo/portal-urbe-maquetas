// Angular.
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

// Modelos.
import { CareersInformation } from '../../core/models/careers-info';
import { LinkFile, LinkItem } from '../../core/models/links';
import { Pensum } from '../../core/models/pensum';
import { PresentationCardItem } from '../../core/models/presentation.card';
import { SliderItem } from '../../core/models/slider-carousel';

// Componentes.
import { AsideNavComponent } from '../aside-nav/aside-nav.component';
import { PensumCardsComponent } from '../pensum-cards/pensum-cards.component';
import { PresentationCardComponent } from '../presentation-card/presentation-card.component';



@Component({
  imports: [NgFor, NgIf, NgStyle, AsideNavComponent, PresentationCardComponent, PensumCardsComponent],
  selector: 'app-postgrade-information',
  standalone: true,
  styleUrls: ['./postgrade-information.component.scss'],
  templateUrl: './postgrade-information.component.html',
})
export class PostgradeInformationComponent {

  public businessSchedules: Array<LinkItem> = [
    { label: 'Martes a viernes', labelSecondary: ['8:00am a 12:00pm - 12:30pm a 6:00pm',], },
  ];

  public consultationSchedules: Array<LinkItem> = [
    { label: 'Martes a viernes', labelSecondary: ['1:00pm a 8:30pm',], },
    { label: 'Sábados', labelSecondary: ['8:00am a 4:00pm',], },
  ];

  public participantsAttention: Array<LinkItem> = [
    { label: 'Coordinación docente postgrado', labelSecondary: ['Bloque G'], },
    { label: 'Martes a Viernes', labelSecondary: ['7:30am a 8:30pm',], },
    { label: 'Sábados', labelSecondary: ['7:30am a 4:00pm',], },
  ];

  public programsCoordinators: Array<LinkItem> = [
    { label: 'Martes a viernes', labelSecondary: ['12:00pm a 7:30pm',], },
    { label: 'Sábados', labelSecondary: ['7:30am a 3:30pm.',], },
  ];

  @Input()
  public accreditation!: Array<LinkItem>;

  @Input()
  public bulletin!: LinkFile;

  @Input()
  public careersInformation!: CareersInformation;

  @Input()
  public collegePageLink?: string;

  @Input()
  public contactsNav!: Array<LinkItem>;

  @Input()
  public downloadsNav!: Array<LinkItem>;

  @Input()
  public imageUrl = '';

  @Input()
  public labNav!: Array<LinkItem>;

  @Input()
  public pensum!: Pensum;

  @Input()
  public presentationData!: Array<PresentationCardItem>;

  @Input()
  public servicesNav!: Array<LinkItem>;

  @Input()
  public scheduleNav!: Array<LinkItem>;

  @Input()
  public sliderItems: Array<SliderItem> = [
    {
      altText: 'Item slider 1',
      imageUrl: 'https://www.fundaciontelefonica.com/wp-content/uploads/2021/08/programacion-42-portada-noticia-2560x950-1.jpg',
      imageUrlSets: {
        mobile: 'https://www.bambu-mobile.com/wp-content/uploads/2023/01/category-banner-apps-moviles.jpg',
        tablet: 'https://img.freepik.com/vector-premium/manos-desarrollador-web-usando-tablet-pc-creando-codigo-programa-desarrollo-software-concepto-programacion_48369-33861.jpg?w=2000',
      },
      linkMode: { path: '../', target: '_blank', },
    },
    {
      altText: 'Item slider 2',
      imageUrl: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/04/programacion-1917283.jpg',
      imageUrlSets: {
        mobile: 'https://appmarketingnews.io/wp-content/uploads/2022/08/AdobeStock_221388571.jpg',
        tablet: 'https://thumbs.dreamstime.com/z/concepto-de-interfaz-programaci%C3%B3n-aplicaciones-api-con-tablet-y-tel%C3%A9fono-una-tableta-un-inteligente-215170982.jpg',
      },
    },
  ];

  @Input()
  public urbemun!: Array<LinkItem>;

  public determineVisibilityAsideNav(items: Array<LinkItem> | undefined): boolean {
    return (items !== undefined && items !== null && items.length > 0);
  }
}
