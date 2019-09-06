import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF, CommonModule} from '@angular/common';

import { AddVehicleComponent } from './vehicle/add-vehicle.component';
import { VehicleListComponent } from './vehicle/vehicle-list.component';
import { EditVehicleComponent } from './vehicle/edit-vehicle.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-root', pathMatch: 'full' },
  { path: 'app-add-vehicle', component: AddVehicleComponent },
  { path: 'app-vehicle-list', component: VehicleListComponent },
  { path: 'app-edit-vehicle/:id', component: EditVehicleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: ''}]
})
export class AppRoutingModule { }
