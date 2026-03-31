import { Component, Input } from '@angular/core';
import { BigButton } from '../big-button/big-button';

@Component({
  selector: 'app-about-section-left',
  imports: [BigButton],
  templateUrl: './about-section-left.html',
  styleUrl: './about-section-left.css',
})
export class AboutSectionLeft {
  @Input() image = '';
  @Input() imageAlt = ''
  @Input() heading = '';
  @Input() paragraph = '';
  @Input() link = '';
}
