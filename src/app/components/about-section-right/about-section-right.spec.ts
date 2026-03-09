import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionRight } from './about-section-right';

describe('AboutSectionRight', () => {
  let component: AboutSectionRight;
  let fixture: ComponentFixture<AboutSectionRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionRight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
