import { ChangeDetectionStrategy, Component, inject, signal, TemplateRef, ViewChild } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-overlay',
  imports: [],
  templateUrl: './contact-overlay.component.html',
  styleUrl: './contact-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactOverlayComponent {
  private offcanvasService = inject(NgbOffcanvas);
  private offcanvasRef: NgbOffcanvasRef | null = null;

  isOpen = signal<boolean>(false);

  @ViewChild('contactForm', { static: false })
  contactForm!: TemplateRef<any>;

  toggleOverlay(): void {
    if (!this.isOpen()) {
      this.openOverlay();
    } else {
      this.closeOverlay();
    }
  }

  /* openOverlay(): void {
    this.offcanvasService.open(this.contactForm, { ariaLabelledBy: 'overlayLabel', position: 'top', panelClass: 'offcanvas-fullscreen' });
    this.isOpen.set(true);
  } */

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

  /* closeOverlay(): void {
    this.offcanvasService.dismiss();
    this.isOpen.set(false);
  } */

  closeOverlay(): void {
    if (this.offcanvasRef) {
      this.offcanvasRef.close();
      this.offcanvasRef = null;
      this.isOpen.set(false);
    }
  }
}