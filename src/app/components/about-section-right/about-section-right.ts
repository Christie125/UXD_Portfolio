import { Component, Input } from '@angular/core';
import { BigButton } from '../big-button/big-button';

@Component({
  selector: 'app-about-section-right',
  imports: [BigButton],
  templateUrl: './about-section-right.html',
  styleUrl: './about-section-right.css',
})
export class AboutSectionRight {
  @Input() image = '';
  @Input() imageAlt = ''
  @Input() heading = '';
  @Input() paragraph = '';
  @Input() link = '';
}
