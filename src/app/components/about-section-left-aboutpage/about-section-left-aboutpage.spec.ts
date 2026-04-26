import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionLeftAboutPage } from './about-section-left-aboutpage';

describe('AboutSectionLeftAboutPage', () => {
  let component: AboutSectionLeftAboutPage;
  let fixture: ComponentFixture<AboutSectionLeftAboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionLeftAboutPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AboutSectionLeftAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
