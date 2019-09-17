import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { DataObject } from "./data-object";
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private angularFirestore: AngularFirestore) { }

  createUpdate(collectionName: string, dataObject: DataObject) {
    let forUpdate: boolean
    if (dataObject.id == undefined) {
      dataObject.id = uuid()
      forUpdate = false
    } else {
      forUpdate = true
    }
    let collection: AngularFirestoreCollection<DataObject> = this.angularFirestore.collection(collectionName)
    collection.doc(dataObject.id).set(dataObject).then(() => {
      let msg = forUpdate ? "updated" : "created"
      console.log(msg, dataObject)
    }).catch(err => {
      console.error("error: " + dataObject + " " + err)
    })
  }
  read<T>(collectionName: string): Observable<T[]> {
    let collection: AngularFirestoreCollection<T> = this.angularFirestore.collection(collectionName)
    console.log("read", collectionName)
    return collection.valueChanges()
  }
}
