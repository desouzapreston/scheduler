import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { MatRippleModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { AppComponent } from './app-component/app.component';
import { AppRoutingModule } from './app-routing.module';
//db
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule, FirestoreSettingsToken } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { AddVehicleComponent } from './vehicle/add-vehicle.component';
import { EditVehicleComponent } from './vehicle/edit-vehicle.component';
import { VehicleListComponent } from './vehicle/vehicle-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EventCalendarComponent,
    EventDisplayComponent,
    CreateVehiclesComponent,
    AddVehicleComponent,
    EditVehicleComponent,
    VehicleListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }