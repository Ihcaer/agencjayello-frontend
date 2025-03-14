import { Component } from '@angular/core';
import { FooterLogosComponent } from "./footer-logos/footer-logos.component";
import { FooterMenuComponent } from "./footer-menu/footer-menu.component";
import { FooterOfficesComponent } from "./footer-offices/footer-offices.component";

@Component({
  selector: 'app-footer',
  imports: [FooterLogosComponent, FooterMenuComponent, FooterOfficesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
