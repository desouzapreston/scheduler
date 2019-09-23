import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "app-list-vehicles", component: ListVehiclesComponent },
  { path: "app-create-vehicles", component: CreateVehiclesComponent },
  { path: "app-appointment-booking", component: AppointmentBookingComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
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
