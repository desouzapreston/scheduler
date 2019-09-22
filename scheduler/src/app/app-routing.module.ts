import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';

const routes: Routes = [
  { path: "app-list-vehicles", component: ListVehiclesComponent },
  { path: "app-create-vehicles", component: CreateVehiclesComponent },
  { path: "app-appointment-booking", component: AppointmentBookingComponent },



];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }]
})
export class AppRoutingModule { }
