import { Component } from '@angular/core';
import { FooterLogosComponent } from "./footer-logos/footer-logos.component";

@Component({
  selector: 'app-footer',
  imports: [FooterLogosComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
