import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { socialMediaConfig } from '@main/config/socialMedia.config';
import { SanitizationService } from 'app/shared/services/sanitization/sanitization.service';

@Component({
  selector: 'app-footer-socials',
  imports: [NgOptimizedImage],
  templateUrl: './footer-socials.component.html',
  styleUrl: './footer-socials.component.scss'
})
export class FooterSocialsComponent {
  private sanitizer = inject(SanitizationService);
  protected socials = signal(socialMediaConfig);

  sanitizeUrl(url: string): SafeUrl {
    let safeUrl: SafeUrl = this.sanitizer.sanitizeUrl(url);
    return safeUrl;
  }
}
