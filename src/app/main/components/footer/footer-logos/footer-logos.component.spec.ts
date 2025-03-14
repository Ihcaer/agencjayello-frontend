import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLogosComponent } from './footer-logos.component';

describe('FooterLogosComponent', () => {
  let component: FooterLogosComponent;
  let fixture: ComponentFixture<FooterLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
