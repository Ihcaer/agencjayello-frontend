import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTriviaComponent } from './about-us-trivia.component';

describe('AboutUsTriviaComponent', () => {
  let component: AboutUsTriviaComponent;
  let fixture: ComponentFixture<AboutUsTriviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsTriviaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
