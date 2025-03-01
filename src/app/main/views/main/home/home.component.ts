import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutUsSectionComponent } from "./about-us-section/about-us-section.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroComponent, AboutUsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  styles: [`
    @media (max-width: 850px) {
      .scrollingImages {
        transform: translateY(0) rotate(10deg) !important;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  scrollPosition: number = 0;
  maxScrollPosition: number = 900;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const newPosition = window.scrollY;
    this.scrollPosition = Math.min(newPosition, this.maxScrollPosition);
  }

  getScrollingImageStyles() {
    // Deactivation when screen is too small in @Component decorator
    return {
      'transform': 'translateY(' + this.scrollPosition + 'px) rotate(10deg)',
    }
  }
}