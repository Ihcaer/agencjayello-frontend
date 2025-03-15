import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { MenuButtonComponent } from "./menu-button/menu-button.component";
import { ContactButtonComponent } from "./contact-button/contact-button.component";
import { referencesConfig } from '@main/config/references/references.config';
import { socialMediaConfig } from '@main/config/socialMedia.config';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { SanitizationService } from 'app/shared/services/sanitization/sanitization.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header-toolbar',
  imports: [NgOptimizedImage, MenuButtonComponent, ContactButtonComponent, RouterLink, MatDividerModule],
  templateUrl: './header-toolbar.component.html',
  styleUrl: './header-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderToolbarComponent {
  private sanitizer = inject(SanitizationService);

  protected isMenuOpen = signal(false);
  protected readonly references = signal(referencesConfig);
  protected readonly socialMedia = signal(socialMediaConfig);

  protected toggleMenu(isOpen: boolean): void {
    this.isMenuOpen.set(isOpen);
  }

  protected sanitizeUrl(url: string): SafeUrl {
    let safeUrl: SafeUrl = this.sanitizer.sanitizeUrl(url);
    return safeUrl;
  }
}
