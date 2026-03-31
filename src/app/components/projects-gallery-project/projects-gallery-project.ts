import { Component, Input } from '@angular/core';
import { ProjectButton } from '../project-button/project-button';

@Component({
  selector: 'app-projects-gallery-project',
  imports: [ProjectButton],
  templateUrl: './projects-gallery-project.html',
  styleUrl: './projects-gallery-project.css',
})
export class ProjectsGalleryProject {
  @Input() image = '';
  @Input() imageAlt = ''
  @Input() heading = '';
  @Input() paragraph = ''
  @Input() link = '';
}
