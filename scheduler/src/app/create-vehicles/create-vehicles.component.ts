import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from '../shared/app.service';



@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css'],
  providers: []
})
export class CreateVehiclesComponent implements OnInit {
  vehicleCreateForm: FormGroup;
  
  constructor(private fb: FormBuilder, private appService: AppService) {
  }
  ngOnInit() {
    this.vehicleCreateForm = this.fb.group({
      makeOfVehicle: ['Honda'],
      modelOfVehicle: ['Civic'],
      yearOfVehicle: [2007],
    })
  }
  onSubmit() {
    let dataObject = this.vehicleCreateForm.value
    this.appService.createUpdate("Vehicle", dataObject)
  }
}


// public vehicles: AngularFireList<Vehicle[]>;
// class Vehicle {
//   constructor(public make: any, public model: any, public year: any) {
//   }
// }
// updateMake() {
//   //@ToDo: connect to Firebase
//   let obj = { makeOfVehicle: "Toyota" };
//   this.vehicleCreateForm.setValue(obj);
// }
// updateModel() {
//   //@ToDo: connect to Firebase
// }