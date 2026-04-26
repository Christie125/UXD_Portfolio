import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionLeftHomePage } from './about-section-left-homepage';

describe('AboutSectionLeftHomePage', () => {
  let component: AboutSectionLeftHomePage;
  let fixture: ComponentFixture<AboutSectionLeftHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionLeftHomePage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AboutSectionLeftHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
