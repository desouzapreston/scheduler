import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent implements OnInit {

  appointmentBookingForm: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) {
  }

  ngOnInit() {
    this.appointmentBookingForm = this.fb.group({
      nameOfDriver: ['George Washington'],
      timeAndDateOfAppointment: [''],
    })
  }

}
