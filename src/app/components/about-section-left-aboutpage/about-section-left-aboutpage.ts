import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-section-left-aboutpage',
  templateUrl: './about-section-left-aboutpage.html',
  styleUrl: './about-section-left-aboutpage.css',
})
export class AboutSectionLeftAboutPage {
  @Input() image = '';
  @Input() imageAlt = ''
  @Input() imageSubtitle = '';
  @Input() heading = '';
  @Input() paragraph = '';
  @Input() link = '';
}
