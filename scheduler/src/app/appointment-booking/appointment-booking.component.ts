import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../shared/app.service';
import { Subscription } from 'rxjs';
import { Vehicle } from '../shared/vehicle';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent implements OnInit {

  appointmentBookingForm: FormGroup
  subscription: Subscription

  constructor(private fb: FormBuilder, private appService: AppService) {
  }

  ngOnInit() {
    let vehicles = this.appService.read<Vehicle>("Vehicle")
    this.subscription = vehicles.subscribe((data: Vehicle[]) => {
      console.log("Updating dropdown", data)
    })

    this.appointmentBookingForm = this.fb.group({
      nameOfDriver: ['George Washington'],
      timeAndDateOfAppointment: [''],
      vehiclePreference: [''],
    })
  }
}
  