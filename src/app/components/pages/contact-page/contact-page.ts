import { Component } from '@angular/core';
import { BasicHeading } from '../../basic-heading/basic-heading';
import { ContactForm } from '../../contact-form/contact-form';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-contact-page',
  imports: [BasicHeading, ContactForm, Footer],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

}
