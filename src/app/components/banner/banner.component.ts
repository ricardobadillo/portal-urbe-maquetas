// Angular.
import { NgClass, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';



@Component({
  imports: [ NgClass, NgIf, NgStyle, UpperCasePipe, ],
  selector: 'app-banner',
  standalone: true,
  styleUrls: ['./banner.component.scss'],
  templateUrl: './banner.component.html',
})
export class BannerComponent {

  @Input()
  public imageBackground = `url('https://cdn.urbe.edu/portal-urbe/images/university/fachada-urbe.jpg')`;

  @Input()
  public title!: string;

  @Input()
  public subtitle?: string;
}