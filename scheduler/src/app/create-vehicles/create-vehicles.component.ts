import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent implements OnInit {
  vehicleCreateForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  onSubmit(){
    console.log(this.vehicleCreateForm.value);
  }
  updateMake() {
    //@ToDo: connect to Firebase
    let obj = { makeOfVehicle: "Toyota" };
    this.vehicleCreateForm.setValue(obj);
  }
  updateModel() {
    //@ToDo: connect to Firebase
  }
  ngOnInit() {
    this.vehicleCreateForm = this.fb.group({
      makeOfVehicle: [''],
      modelOfVehicle: [''],
      yearOfVehicle: [],
    })
  }

}
