import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Booking} from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public booking = new Subject<Booking>(); // this.bookingObject;
  public booking$ = this.booking.asObservable();
  public selectedServiceName = '';
  public bookingObject: Booking = {
    name: '',
    startDate: new Date(),
    endDate: new  Date(),
    material: false,
    materialDescription: '',
    resources: 0
  };

  constructor() { }

}
