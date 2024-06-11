// Angular.
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modelos.
import { LinkFile, LinkItem } from '../../core/models/links';



@Component({
  imports: [ NgFor, NgIf, NgSwitch, NgSwitchCase, RouterModule, ],
  selector: 'app-aside-nav',
  standalone: true,
  styleUrls: ['./aside-nav.component.scss'],
  templateUrl: './aside-nav.component.html',
})
export class AsideNavComponent {

  @Input()
  public associatedCollege!: LinkFile;

  @Input()
  public bulletin!: LinkFile;

  @Input()
  public items: Array<LinkItem> = [];

  @Input()
  public title = 'titulo';

  @Input()
  public type?: 'associatedCollege' | 'bulletin' | 'contacts' | 'downloads' | 'links' | 'places' | 'schedule';

  public determineLink(link = ''): boolean {
    // Evalúa que el enlace contenga "http://" o "https://" en caso de que no contenga retorna falso.
    return /(http:\/\/)|(https:\/\/)\w+/.test(link);
  }
}