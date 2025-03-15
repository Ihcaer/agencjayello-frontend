import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal, TemplateRef, viewChild, ViewChild } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { ContactDataComponent } from "./contact-data/contact-data.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactOverlayService } from '@main/services/contact-overlay/contact-overlay.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-overlay',
  imports: [ContactDataComponent, ContactFormComponent],
  templateUrl: './contact-overlay.component.html',
  styleUrl: './contact-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactOverlayComponent implements OnInit, OnDestroy {
  private offcanvasService = inject(NgbOffcanvas);
  private contactOverlayService = inject(ContactOverlayService);
  private offcanvasRef: NgbOffcanvasRef | null = null;
  private contactFormComponent = viewChild.required(ContactFormComponent);
  private subscription!: Subscription;

  isOpen = signal<boolean>(false);

  @ViewChild('contactForm', { static: false })
  contactForm!: TemplateRef<any>;

  ngOnInit(): void {
    this.subscription = this.contactOverlayService.openOverlay$.subscribe(() => {
      this.openOverlay();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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