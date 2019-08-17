import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleTimeSlotComponent } from './motorcycle-time-slot.component';

describe('MotorcycleTimeSlotComponent', () => {
  let component: MotorcycleTimeSlotComponent;
  let fixture: ComponentFixture<MotorcycleTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorcycleTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
