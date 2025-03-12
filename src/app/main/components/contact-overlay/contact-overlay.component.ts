import { ChangeDetectionStrategy, Component, inject, signal, TemplateRef, viewChild, ViewChild } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { ContactDataComponent } from "./contact-data/contact-data.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-contact-overlay',
  imports: [ContactDataComponent, ContactFormComponent],
  templateUrl: './contact-overlay.component.html',
  styleUrl: './contact-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactOverlayComponent {
  private offcanvasService = inject(NgbOffcanvas);
  private offcanvasRef: NgbOffcanvasRef | null = null;
  private contactFormComponent = viewChild.required(ContactFormComponent);

  isOpen = signal<boolean>(false);

  @ViewChild('contactForm', { static: false })
  contactForm!: TemplateRef<any>;

  toggleOverlay(): void {
    if (!this.isOpen()) {
      this.openOverlay();
    } else {
      this.contactFormComponent().saveFormData();
      this.closeOverlay();
    }
  }

  openOverlay(): void {
    this.offcanvasRef = this.offcanvasService.open(this.contactForm, {
      ariaLabelledBy: 'overlayLabel',
      position: 'top',
      panelClass: 'offcanvas-fullscreen',
    });

    this.offcanvasRef.result.then(
      () => { },
      () => {
        this.isOpen.set(false);
        this.offcanvasRef = null;
      }
    );
    this.isOpen.set(true);
  }

  closeOverlay(): void {
    if (this.offcanvasRef) {
      this.offcanvasRef.close();
      this.offcanvasRef = null;
      this.isOpen.set(false);
    }
  }
}