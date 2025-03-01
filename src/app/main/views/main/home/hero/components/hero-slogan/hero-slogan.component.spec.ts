import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSloganComponent } from './hero-slogan.component';

describe('HeroSloganComponent', () => {
  let component: HeroSloganComponent;
  let fixture: ComponentFixture<HeroSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSloganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
