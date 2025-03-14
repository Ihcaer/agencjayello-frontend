import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactButtonComponent } from './contact-button.component';
import { ContactOverlayComponent } from '@main/components/contact-overlay/contact-overlay.component';

describe('ContactButtonComponent', () => {
  let component: ContactButtonComponent;
  let fixture: ComponentFixture<ContactButtonComponent>;
  let contactOverlay: ContactOverlayComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactButtonComponent, ContactOverlayComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactButtonComponent);
    component = fixture.componentInstance;
    contactOverlay = fixture.debugElement.query(debugEl => debugEl.componentInstance instanceof ContactOverlayComponent).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct open state', () => {
    contactOverlay.isOpen.set(true);
    expect(component.isContactOverlayOpen()).toBe(true);

    contactOverlay.isOpen.set(false);
    expect(component.isContactOverlayOpen()).toBe(false);
  });

  it('should apply "open" class when overlay is open', () => {
    const button = fixture.nativeElement.querySelector('button');

    contactOverlay.isOpen.set(true);
    fixture.detectChanges();
    expect(button.classList.contains('open')).toBe(true);

    contactOverlay.isOpen.set(false);
    fixture.detectChanges();
    expect(button.classList.contains('open')).toBe(false);
  });
});
