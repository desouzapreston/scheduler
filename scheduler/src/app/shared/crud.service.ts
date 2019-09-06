import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  vehiclesRef: any;
  vehicleRef: any;

  constructor(private db: AngularFireDatabase) { }
   // Create Vehicle
   AddVehicle(vehicle: Vehicle) {
    this.vehiclesRef.push({
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year
    })
  }

  // Fetch Single Vehicle Object
  GetVehicle(id: string) {
    this.vehicleRef = this.db.object('vehicles-list/' + id);
    return this.vehicleRef;
  }

  // Fetch Vehicles List
  GetVehiclesList() {
    this.vehiclesRef = this.db.list('vehicles-list');
    return this.vehiclesRef;
  }  

  // Update Vehicle Object
  UpdateVehicle(vehicle: Vehicle) {
    this.vehicleRef.update({
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year
    })
  }  

  // Delete Vehicle Object
  DeleteVehicle(id: string) { 
    this.vehicleRef = this.db.object('vehicles-list/'+id);
    this.vehicleRef.remove();
  }
}
