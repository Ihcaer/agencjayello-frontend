import { Component, inject, signal } from '@angular/core';
import { contactData } from '@main/config/contact/contactData.config';
import { ContactOverlayService } from '@main/services/contact-overlay/contact-overlay.service';

@Component({
  selector: 'app-footer-contact',
  imports: [],
  templateUrl: './footer-contact.component.html',
  styleUrl: './footer-contact.component.scss'
})
export class FooterContactComponent {
  private contactOverlayService = inject(ContactOverlayService);
  protected contactData = signal(contactData);

  protected openContactForm(): void {
    this.contactOverlayService.triggerOpenOverlay();
  }
}
