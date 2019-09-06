import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-module/app-routing.module';
import { AppComponent } from '../app-component/app.component';
import { EventCalendarComponent } from '../event-calendar/event-calendar.component';
import { EventDisplayComponent } from '../event-display/event-display.component';
import { MatRippleModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CreateVehiclesComponent } from '../create-vehicles/create-vehicles.component';
//db
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EventCalendarComponent,
    EventDisplayComponent,
    CreateVehiclesComponent,
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
    AngularFireModule.initializeApp(environment.firebase, 'scheduler'),
    AngularFireDatabaseModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}