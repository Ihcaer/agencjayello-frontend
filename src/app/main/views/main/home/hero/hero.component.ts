import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSloganComponent } from "./components/hero-slogan/hero-slogan.component";

@Component({
  selector: 'app-hero',
  imports: [HeroSloganComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {

}
