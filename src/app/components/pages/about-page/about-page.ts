import { Component } from '@angular/core';
import { BasicHeading } from '../../basic-heading/basic-heading';
import { AboutSectionLeftAboutPage } from '../../about-section-left-aboutpage/about-section-left-aboutpage';
import { AboutSectionRight } from '../../about-section-right/about-section-right';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-about-page',
  imports: [BasicHeading, AboutSectionLeftAboutPage, AboutSectionRight, Footer],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {

}
