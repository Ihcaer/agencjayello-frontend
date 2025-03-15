import { Component } from '@angular/core';
import { FooterLogosComponent } from "./footer-logos/footer-logos.component";
import { FooterMenuComponent } from "./footer-menu/footer-menu.component";
import { FooterOfficesComponent } from "./footer-offices/footer-offices.component";
import { FooterContactComponent } from "./footer-contact/footer-contact.component";

@Component({
  selector: 'app-footer',
  imports: [FooterLogosComponent, FooterMenuComponent, FooterOfficesComponent, FooterContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
