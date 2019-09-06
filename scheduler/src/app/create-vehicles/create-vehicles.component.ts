import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent implements OnInit {
  vehicleCreateForm: FormGroup;
  loading = false;
  success = false;
  constructor(private fb: FormBuilder, private fs: AngularFirestore) {
  }
  ngOnInit() {
    this.vehicleCreateForm = this.fb.group({
      makeOfVehicle: ['Honda'],
      modelOfVehicle: ['Civic'],
      yearOfVehicle: [2007],
    })
    this.preloadData()
  }
  async submitVehicle() {
    this.loading = true;
    const formValue = this.vehicleCreateForm.value;
    try {
      await this.fs.collection('Inventory').add(formValue);
      this.success = true;
    } catch(err) {
      console.error(err)
    }
    this.loading = false;
  }
  preloadData() {
    this.fs.doc('Inventory/vehicles').valueChanges().pipe(
      tap(data => {
        this.vehicleCreateForm.patchValue(data)
      })
    )
    .subscribe()
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