// Angular.
import { NgClass, NgFor, NgIf, NgStyle, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, PLATFORM_ID, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

// Angular CDK.
import { BreakpointObserver } from '@angular/cdk/layout';

// Angular Material.
import { MatIconModule } from '@angular/material/icon';

// Librerías externas.
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

// RXJS.
import { distinctUntilChanged } from 'rxjs';

// Utils.
import { determineProtocolLink } from '../../core/utils/determinate-link';



@Component({
  selector: 'app-slider-circle',
  standalone: true,
  imports: [ NgClass, NgFor, NgIf, NgStyle, RouterModule, MatIconModule, ],
  templateUrl: './slider-circle.component.html',
  styleUrls: ['./slider-circle.component.scss']
})
export class SliderCircleComponent implements AfterViewInit, OnDestroy {

  private breakpointObserver = inject(BreakpointObserver);
  private changeDetector = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);

  public currentSlide = 0;
  public dotHelper: Array<number> = [];
  public slider: KeenSliderInstance | null = null;
  public showButtons!: boolean;

  @Input()
  public containerSliderStyles?: Record<string, number | string>;

  @Input()
  public slides!: Array<{ icon: string, route: string, text: string }>;

  @ViewChild('sliderRef')
  private sliderRef!: ElementRef<HTMLElement>;

  public readonly breakpoint$ = this.breakpointObserver
    .observe([ '(min-width: 869px)' ])
    .pipe(distinctUntilChanged());

  public determinateProtocolLink(link: string): boolean {
    return determineProtocolLink(link);
  }

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
          breakpoints: {
            "(max-width: 599px)": { slides: { perView: 2 } },
            "(min-width: 600px)": { slides: { perView: 3 } },
            "(min-width: 1280px)": { slides: { perView: 4 } },
          },
          initial: this.currentSlide,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel
          },
        });

        this.dotHelper = [ ...Array(this.slider.track.details.slides.length).keys() ];
      });
    }

    this.breakpoint$.subscribe(() => this.breakpointChanged());
    this.changeDetector.detectChanges();
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.slider) {
      this.slider.destroy();
    }

    this.breakpointObserver.ngOnDestroy();
  }

  // Cargando el valor boolean para mostrar u ocultar los botones dependiendo de la cantidad de sliders y los puntos de quiebre.
  private breakpointChanged(): void {
    if (this.breakpointObserver.isMatched('(min-width: 869px)')) {
      this.showButtons = !(this.slides.length <= 4);
      return;
    }

    this.showButtons = true;
  }
}