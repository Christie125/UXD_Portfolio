import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home-page-heading',
  imports: [Navbar],
  templateUrl: './home-page-heading.html',
  styleUrl: './home-page-heading.css',
})
export class HomePageHeading {
  @Input() heading = 'Christie';
  @Input() subheading = 'Hi, I\'m';

}
