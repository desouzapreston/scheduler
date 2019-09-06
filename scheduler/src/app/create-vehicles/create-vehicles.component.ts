import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// class Vehicle {
//   constructor(public make: any, public model: any, public year: any) {
//   }
// }
@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent implements OnInit {
  vehicleCreateForm: FormGroup;
  // public vehicles: AngularFireList<Vehicle[]>;
  constructor(private fb: FormBuilder) {
    

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
