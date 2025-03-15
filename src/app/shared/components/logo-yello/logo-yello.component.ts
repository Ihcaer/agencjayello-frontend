import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo-yello',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './logo-yello.component.html',
  styleUrl: './logo-yello.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoYelloComponent {

}
