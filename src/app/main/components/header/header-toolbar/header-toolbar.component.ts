import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuButtonComponent } from "./menu-button/menu-button.component";
import { ContactButtonComponent } from "./contact-button/contact-button.component";
import { referencesConfig } from '@main/config/references/references.config';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  imports: [MenuButtonComponent, ContactButtonComponent, RouterLink],
  templateUrl: './header-toolbar.component.html',
  styleUrl: './header-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderToolbarComponent {
  isMenuOpen = signal(false);
  references = signal(referencesConfig);

  toggleMenu(isOpen: boolean): void {
    this.isMenuOpen.set(isOpen);
  }
}
