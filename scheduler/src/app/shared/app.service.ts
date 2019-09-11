import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { DataObject } from "./data-object";
import { v4 as uuid } from 'uuid';


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
}
