import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingAboutUsSectionComponent } from './heading-about-us-section.component';

describe('HeadingAboutUsSectionComponent', () => {
  let component: HeadingAboutUsSectionComponent;
  let fixture: ComponentFixture<HeadingAboutUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingAboutUsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingAboutUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
