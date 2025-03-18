import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { triviaConfig } from '@main/config/trivia.config';

@Component({
  selector: 'app-about-us-trivia',
  imports: [NgOptimizedImage],
  templateUrl: './about-us-trivia.component.html',
  styleUrl: './about-us-trivia.component.scss',
  styles: [`
    .change-animation {
      transition: opacity 500ms ease-out;
    }
    .changing-trivia {
      opacity: 0;
    }
    `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsTriviaComponent {
  private trivia: string[] = triviaConfig;
  private animationTiming: number = 500;

  protected triviaLength = signal<number>(this.trivia.length);
  protected currentIndex = signal<number>(0);
  protected currentTrivia = computed(() => {
    const index = this.currentIndex();
    return this.trivia[index];
  });
  protected isTriviaChanging = signal<boolean>(false);

  previousTrivia(): void {
    this.triggerAnimation();
    if (this.currentIndex() <= 0) {
      this.currentIndex.set(this.triviaLength() - 1);
    } else {
      this.currentIndex.update(value => --value);
    }
  }

  nextTrivia(): void {
    this.triggerAnimation();
    if (this.currentIndex() >= this.triviaLength() - 1) {
      this.currentIndex.set(0);
    } else {
      this.currentIndex.update(value => ++value);
    }
  }

  private triggerAnimation(): void {
    this.isTriviaChanging.set(true);
    setTimeout(() => this.isTriviaChanging.set(false), this.animationTiming);
  }
}
