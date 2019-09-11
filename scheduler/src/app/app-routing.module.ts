import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF, CommonModule} from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: ''}]
})
export class AppRoutingModule { }
