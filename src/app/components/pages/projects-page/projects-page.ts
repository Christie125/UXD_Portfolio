import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { BasicHeading } from '../../basic-heading/basic-heading';
import { ProjectsGallery } from '../../projects-gallery/projects-gallery';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-projects-page',
  imports: [Navbar, BasicHeading, ProjectsGallery, Footer],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {

}
