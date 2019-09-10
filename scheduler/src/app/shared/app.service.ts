import { Injectable } from '@angular/core';
import { config } from "./app.config";
import { Vehicle } from "./app.model";
import { 
  AngularFirestoreDocument, 
  AngularFirestore, 
  AngularFirestoreCollection } from "angularfire2/firestore";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  vehicle: AngularFirestoreCollection<Vehicle>;
  constructor(private angularFirestore: AngularFirestore) { }
  


}
