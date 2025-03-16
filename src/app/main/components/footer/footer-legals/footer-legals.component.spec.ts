import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLegalsComponent } from './footer-legals.component';
import { provideRouter } from '@angular/router';

describe('FooterLegalsComponent', () => {
  let component: FooterLegalsComponent;
  let fixture: ComponentFixture<FooterLegalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLegalsComponent],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterLegalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
