// Angular.
import { Component } from '@angular/core';

// Modelos.
import { LinkItem } from '../../core/models/links';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { AsideNavComponent } from '../../components/aside-nav/aside-nav.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-centro-idiomas',
  imports: [
    BannerComponent,
    MatExpansionModule,
    MatIconModule,
    AsideNavComponent,
  ],
  standalone: true,
  templateUrl: './centro-idiomas.component.html',
  styleUrls: ['./centro-idiomas.component.scss'],
})
export class CentroIdiomasComponent {
  public contactsNav: Array<LinkItem> = [
    {
      imageUrl: 'https://cdn.urbe.edu/portal-urbe/icons/round-icons/mail.svg',
      label: 'postgrado@urbe.edu',
    },
    {
      imageUrl: 'https://cdn.urbe.edu/portal-urbe/icons/round-icons/phone.svg',
      label: '(0261) 2008570',
    },
  ];
}
