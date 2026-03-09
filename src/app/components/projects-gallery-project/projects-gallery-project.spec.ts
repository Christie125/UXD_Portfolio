import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsGalleryProject } from './projects-gallery-project';

describe('ProjectsGalleryProject', () => {
  let component: ProjectsGalleryProject;
  let fixture: ComponentFixture<ProjectsGalleryProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsGalleryProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsGalleryProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
