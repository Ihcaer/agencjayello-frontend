import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu-button',
  imports: [MatButtonModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent {
  buttonClicked = output<boolean>();
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(value => !value);
    this.buttonClicked.emit(this.menuOpen());
  }
}
