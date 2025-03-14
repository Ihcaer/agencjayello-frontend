import { Component, signal } from '@angular/core';
import { officeLocations } from '@main/config/contact/officeLocations.config';

@Component({
  selector: 'app-footer-offices',
  imports: [],
  templateUrl: './footer-offices.component.html',
  styleUrl: './footer-offices.component.scss'
})
export class FooterOfficesComponent {
  protected offices = signal(officeLocations);
}
