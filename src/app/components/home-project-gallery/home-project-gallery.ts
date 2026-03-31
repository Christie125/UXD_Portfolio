import { Component } from '@angular/core';
import { ProjectsGalleryProject } from '../projects-gallery-project/projects-gallery-project';
import { BigButton } from '../big-button/big-button';

@Component({
  selector: 'app-home-project-gallery',
  imports: [ProjectsGalleryProject, BigButton],
  templateUrl: './home-project-gallery.html',
  styleUrl: './home-project-gallery.css',
})
export class HomeProjectGallery {

}
