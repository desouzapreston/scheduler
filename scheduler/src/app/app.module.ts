import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotorcycleTimeSlotComponent } from './motorcycle-time-slot/motorcycle-time-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorcycleTimeSlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
