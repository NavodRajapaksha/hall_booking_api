import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallForm } from './hall-form';

describe('HallForm', () => {
  let component: HallForm;
  let fixture: ComponentFixture<HallForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HallForm],
    }).compileComponents();

    fixture = TestBed.createComponent(HallForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
