import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatRippleModule, 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatOptionModule,
  MatSelectModule} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatCardModule } from '@angular/material/card';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { AppComponent } from './app-component/app.component';
import { AppRoutingModule } from './app-routing.module';
//db
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { LoginComponent } from './login/login.component';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    CreateVehiclesComponent,
    ListVehiclesComponent,
    AppointmentBookingComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatOptionModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  exports: [
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);