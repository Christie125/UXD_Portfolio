import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHeading } from './home-page-heading';

describe('HomePageHeading', () => {
  let component: HomePageHeading;
  let fixture: ComponentFixture<HomePageHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageHeading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageHeading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
