import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOverlayComponent } from './contact-overlay.component';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { mainReducers } from 'app/main/store/config/main.reducers';
import { provideRouter } from '@angular/router';

describe('ContactOverlayComponent', () => {
  let component: ContactOverlayComponent;
  let fixture: ComponentFixture<ContactOverlayComponent>;
  let offcanvasService: NgbOffcanvas;
  let offcanvasRef: NgbOffcanvasRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactOverlayComponent, StoreModule.forRoot(mainReducers)],
      providers: [NgbOffcanvas, provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactOverlayComponent);
    component = fixture.componentInstance;
    offcanvasService = TestBed.inject(NgbOffcanvas);
    component['contactFormComponent'] = (() => ({
      saveFormData: () => { /* pusta implementacja */ }
    })) as any;
    fixture.detectChanges();

    offcanvasRef = {
      close: jasmine.createSpy('close'),
      result: Promise.resolve(),
    } as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle overlay', () => {
    component.toggleOverlay();
    expect(component.isOpen()).toBe(true);

    component.toggleOverlay();
    expect(component.isOpen()).toBe(false);
  });
});
