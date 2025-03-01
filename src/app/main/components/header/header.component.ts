import { Component } from '@angular/core';
import { LogoYelloComponent } from "../logo-yello/logo-yello.component";
import { HeaderToolbarComponent } from "./header-toolbar/header-toolbar.component";

@Component({
  selector: 'app-header',
  imports: [LogoYelloComponent, HeaderToolbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
