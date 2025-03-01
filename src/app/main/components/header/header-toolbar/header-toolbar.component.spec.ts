import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToolbarComponent } from './header-toolbar.component';
import { provideRouter } from '@angular/router';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { By } from '@angular/platform-browser';

describe('HeaderToolbarComponent', () => {
  let component: HeaderToolbarComponent;
  let fixture: ComponentFixture<HeaderToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderToolbarComponent],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change value isMenuOpen based on buttonClicked event', () => {
    const menuButton = fixture.debugElement.query(By.directive(MenuButtonComponent));
    menuButton.triggerEventHandler('buttonClicked', true);
    fixture.detectChanges();

    expect(component.isMenuOpen()).toBeTrue();
  });

  it('should add .class to menu when isMenuOpen() is true', () => {
    component.toggleMenu(true);
    fixture.detectChanges();

    const menu = fixture.debugElement.query(By.css('.menu'));
    expect(menu.classes['open']).toBeTrue();
  });
});
