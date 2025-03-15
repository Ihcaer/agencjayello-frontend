import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOfficesComponent } from './footer-offices.component';

describe('FooterOfficesComponent', () => {
  let component: FooterOfficesComponent;
  let fixture: ComponentFixture<FooterOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterOfficesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
