import { Component, Input } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-basic-heading',
  imports: [Navbar],
  templateUrl: './basic-heading.html',
  styleUrl: './basic-heading.css',
})
export class BasicHeading {
  @Input() heading = '';
  @Input() subheading = '';

}
