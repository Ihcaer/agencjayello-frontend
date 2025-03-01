import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoYelloComponent } from './logo-yello.component';
import { provideRouter } from '@angular/router';

describe('LogoYelloComponent', () => {
  let component: LogoYelloComponent;
  let fixture: ComponentFixture<LogoYelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoYelloComponent],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LogoYelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
