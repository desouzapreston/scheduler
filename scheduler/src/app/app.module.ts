import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { MatRippleModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

// TODO: Write a lot more components/Testing gitTree
const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];
@NgModule({
  declarations: [
    AppComponent,
    EventCalendarComponent,
    EventDisplayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    [...modules],
  ],
  exports: [
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {}