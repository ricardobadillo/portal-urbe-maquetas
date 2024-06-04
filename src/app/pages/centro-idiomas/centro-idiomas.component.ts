// Angular.
import { Component } from '@angular/core';

// Modelos.
import { LinkItem } from '../../core/models/links';



@Component({
  selector: 'app-centro-idiomas',
  templateUrl: './centro-idiomas.component.html',
  styleUrls: ['./centro-idiomas.component.scss']
})
export class CentroIdiomasComponent {

  contactsNav: Array<LinkItem> = [
    { imageUrl: 'https://cdn.urbe.edu/portal-urbe/icons/round-icons/mail.svg', label: 'postgrado@urbe.edu' },
    { imageUrl: 'https://cdn.urbe.edu/portal-urbe/icons/round-icons/phone.svg', label: '(0261) 2008570' },
  ];
}
