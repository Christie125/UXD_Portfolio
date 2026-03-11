import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProjectGallery } from './home-project-gallery';

describe('HomeProjectGallery', () => {
  let component: HomeProjectGallery;
  let fixture: ComponentFixture<HomeProjectGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProjectGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProjectGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
