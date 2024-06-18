// Angular.
import { NgIf, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

// Modelos.
import { PresentationCardItem } from '../../core/models/presentation.card';



@Component({
  imports: [ NgIf, TitleCasePipe, ],
  selector: 'app-presentation-card',
  standalone: true,
  styleUrls: ['./presentation-card.component.scss'],
  templateUrl: './presentation-card.component.html',
})
export class PresentationCardComponent {

  @Input()
  public data!: PresentationCardItem;
}