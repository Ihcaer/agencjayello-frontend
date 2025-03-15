import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { legalReferences } from '@main/config/references/legalReferences.config';

@Component({
  selector: 'app-footer-legals',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer-legals.component.html',
  styleUrl: './footer-legals.component.scss'
})
export class FooterLegalsComponent {
  protected legals = signal(legalReferences);
}
