import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { referencesConfig } from '@main/config/references/references.config';

@Component({
  selector: 'app-footer-menu',
  imports: [RouterLink],
  templateUrl: './footer-menu.component.html',
  styleUrl: './footer-menu.component.scss'
})
export class FooterMenuComponent {
  protected references = signal(referencesConfig);
}
