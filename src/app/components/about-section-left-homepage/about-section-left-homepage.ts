import { Component, Input } from '@angular/core';
import { BigButton } from '../big-button/big-button';

@Component({
  selector: 'app-about-section-left-homepage',
  imports: [BigButton],
  templateUrl: './about-section-left-homepage.html',
  styleUrl: './about-section-left-homepage.css',
})
export class AboutSectionLeftHomePage {
  @Input() image = '';
  @Input() imageAlt = ''
  @Input() imageSubtitle = '';
  @Input() heading = '';
  @Input() paragraph = '';
  @Input() link = '';
}
