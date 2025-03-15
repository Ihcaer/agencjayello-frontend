import { Component, signal } from '@angular/core';
import { contactData } from '@main/config/contact/contactData.config';

@Component({
  selector: 'app-footer-contact',
  imports: [],
  templateUrl: './footer-contact.component.html',
  styleUrl: './footer-contact.component.scss'
})
export class FooterContactComponent {
  protected contactData = signal(contactData);

  protected openContactForm(): void { }
}
