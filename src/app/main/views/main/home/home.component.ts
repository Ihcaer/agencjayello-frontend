import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutUsSectionComponent } from "./about-us-section/about-us-section.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgOptimizedImage, HeroComponent, AboutUsSectionComponent],
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
  private ticking = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        const newPosition = window.scrollY;
        this.scrollPosition = Math.min(newPosition, this.maxScrollPosition);
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  getScrollingImageStyles() {
    const styles = {
      // Deactivation when screen is too small in @Component decorator
      'transform': 'translateY(' + this.scrollPosition + 'px) rotate(10deg)'
    }
    return styles;
  }
}