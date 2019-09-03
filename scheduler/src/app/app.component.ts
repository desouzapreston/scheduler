import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl, ValidatorFn, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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