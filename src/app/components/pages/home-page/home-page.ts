import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { HomePageHeading } from '../../home-page-heading/home-page-heading';
import { AboutSectionLeft } from '../../about-section-left/about-section-left';
import { HomeProjectGallery } from '../../home-project-gallery/home-project-gallery';
import { ContactForm } from '../../contact-form/contact-form';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-home-page',
  imports: [Navbar, HomePageHeading, AboutSectionLeft, HomeProjectGallery, ContactForm, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
