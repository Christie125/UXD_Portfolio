import { Component } from '@angular/core';
import { HomePageHeading } from '../../home-page-heading/home-page-heading';
import { AboutSectionLeftHomePage } from '../../about-section-left-homepage/about-section-left-homepage';
import { HomeProjectGallery } from '../../home-project-gallery/home-project-gallery';
import { ContactForm } from '../../contact-form/contact-form';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-home-page',
  imports: [HomePageHeading, AboutSectionLeftHomePage, HomeProjectGallery, ContactForm, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
