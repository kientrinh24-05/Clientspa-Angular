import { Injectable } from '@angular/core';

import { Bookingapp } from './bookingapp.model';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor() { }
  readonly baseUrl='http://localhost:8081/api/v1/booking/booking_create'
  // formData:Bookingapp = new Bookingapp();
}
