import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

class Vehicle {
  constructor(public make, public model, public year){
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public vehicles: AngularFireList<Vehicle[]>;
  constructor(db: AngularFireDatabase) {
    this.vehicles = db.list('/vehicles');
  }

  ngOnInit() {
  }
}