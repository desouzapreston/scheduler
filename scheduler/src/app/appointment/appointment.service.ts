import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { CreateVehiclesComponent } from '../create-vehicles/create-vehicles.component';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private db: AngularFireDatabase) { }

  createVehicle(): AngularFireObject<CreateVehiclesComponent> {
    const appointmentDefault = new CreateVehiclesComponent()

  }
}
