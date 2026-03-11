import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { BasicHeading } from '../../basic-heading/basic-heading';
import { AboutSectionLeft } from '../../about-section-left/about-section-left';
import { AboutSectionRight } from '../../about-section-right/about-section-right';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-about-page',
  imports: [Navbar, BasicHeading, AboutSectionLeft, AboutSectionRight, Footer],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {

}
