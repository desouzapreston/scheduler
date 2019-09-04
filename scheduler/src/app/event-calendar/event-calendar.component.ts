import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl, ValidatorFn, FormBuilder } from '@angular/forms';

@Component({
  selector: 'event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})

export class EventCalendarComponent implements OnInit {
  driverForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit() {
    console.warn(this.driverForm.value);
  }
  // @ToDo: function onSubmit() not referencing nameOfDriver, Due to change into formBuilder: COMPLETE
  updateName() {
    let obj = { nameOfDriver: "Bruce Wayne" };
    this.driverForm.setValue(obj);
  }
  ngOnInit() {
    this.driverForm = this.formBuilder.group({
      nameOfDriver: ['Clark Kent'],
    })

  }
}