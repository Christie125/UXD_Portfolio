import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHeading } from './basic-heading';

describe('BasicHeading', () => {
  let component: BasicHeading;
  let fixture: ComponentFixture<BasicHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicHeading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicHeading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
