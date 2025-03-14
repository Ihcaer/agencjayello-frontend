import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { MenuButtonComponent } from "./menu-button/menu-button.component";
import { ContactButtonComponent } from "./contact-button/contact-button.component";
import { referencesConfig } from '@main/config/references/references.config';
import { socialMediaConfig } from '@main/config/socialMedia.config';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header-toolbar',
  imports: [NgOptimizedImage, MenuButtonComponent, ContactButtonComponent, RouterLink, MatDividerModule],
  templateUrl: './header-toolbar.component.html',
  styleUrl: './header-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderToolbarComponent {
  protected isMenuOpen = signal(false);
  protected readonly references = signal(referencesConfig);
  protected readonly socialMedia = signal(socialMediaConfig);

  protected toggleMenu(isOpen: boolean): void {
    this.isMenuOpen.set(isOpen);
  }
}
