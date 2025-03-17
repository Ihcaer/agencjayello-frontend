import { Component } from '@angular/core';
import { HeadingAboutUsSectionComponent } from "./components/heading-about-us-section/heading-about-us-section.component";
import { AboutUsTriviaComponent } from "./components/about-us-trivia/about-us-trivia.component";

@Component({
  selector: 'app-about-us-section',
  imports: [HeadingAboutUsSectionComponent, AboutUsTriviaComponent],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.scss'
})
export class AboutUsSectionComponent {

}
