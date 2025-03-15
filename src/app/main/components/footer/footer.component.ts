import { Component } from '@angular/core';
import { FooterLogosComponent } from "./footer-logos/footer-logos.component";
import { FooterMenuComponent } from "./footer-menu/footer-menu.component";
import { FooterOfficesComponent } from "./footer-offices/footer-offices.component";
import { FooterContactComponent } from "./footer-contact/footer-contact.component";
import { MatDividerModule } from '@angular/material/divider';
import { LogoYelloComponent } from "../logo-yello/logo-yello.component";
import { FooterSocialsComponent } from "./footer-socials/footer-socials.component";
import { FooterLegalsComponent } from "./footer-legals/footer-legals.component";

@Component({
  selector: 'app-footer',
  imports: [FooterLogosComponent, FooterMenuComponent, FooterOfficesComponent, FooterContactComponent, MatDividerModule, LogoYelloComponent, FooterSocialsComponent, FooterLegalsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
