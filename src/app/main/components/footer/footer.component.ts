import { Component } from '@angular/core';
import { FooterLogosComponent } from "./footer-logos/footer-logos.component";
import { FooterMenuComponent } from "./footer-menu/footer-menu.component";

@Component({
  selector: 'app-footer',
  imports: [FooterLogosComponent, FooterMenuComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
