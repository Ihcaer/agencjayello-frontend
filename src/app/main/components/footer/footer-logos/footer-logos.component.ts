import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { SanitizationService } from 'app/shared/services/sanitization/sanitization.service';

@Component({
  selector: 'app-footer-logos',
  imports: [NgOptimizedImage],
  templateUrl: './footer-logos.component.html',
  styleUrl: './footer-logos.component.scss'
})
export class FooterLogosComponent {
  private sanitizer = inject(SanitizationService);

  private safeUrl!: SafeUrl;
  protected opublikowaniUrl: string = "https://opublikowani.pl";

  getSafeUrl(url: string): SafeUrl {
    this.safeUrl = this.sanitizer.sanitizeUrl(url);
    return this.safeUrl;
  }
}
