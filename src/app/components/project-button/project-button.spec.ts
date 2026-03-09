import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectButton } from './project-button';

describe('ProjectButton', () => {
  let component: ProjectButton;
  let fixture: ComponentFixture<ProjectButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
