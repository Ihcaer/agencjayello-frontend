import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ContactOverlayComponent } from "../../../contact-overlay/contact-overlay.component";

@Component({
  selector: 'app-contact-button',
  imports: [MatButtonModule, ContactOverlayComponent],
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactButtonComponent {
  contactOverlayComponent = viewChild.required(ContactOverlayComponent);

  toggleContactOverlay(): void {
    this.contactOverlayComponent().toggleOverlay();
  }

  isContactOverlayOpen(): boolean {
    return this.contactOverlayComponent().isOpen();
  }
}
