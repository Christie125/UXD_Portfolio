import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionLeft } from './about-section-left';

describe('AboutSectionLeft', () => {
  let component: AboutSectionLeft;
  let fixture: ComponentFixture<AboutSectionLeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionLeft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionLeft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
