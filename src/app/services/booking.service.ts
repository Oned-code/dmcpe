import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Booking} from '../models/booking.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public booking = new Subject<Booking>(); // this.bookingObject;
  public booking$ = this.booking.asObservable();
  public selectedServiceName = '';
  public bookingObject: Booking = {
    name: '',
    consultationDate: new Date(),
    capturedDate: new Date(),
    material: 'no',
    materialDescription: '',
    clientNumber: 0,
    clientEmail: '',
    clientFiles: [],
    city: '',
    clientName: '',
    contactNumber: 0,
    postcode: '',
    streetAddress: ''
  };

  constructor(private http: HttpClient) { }

  sendBooking(booking: Booking) {
    this.booking$.subscribe((res: Booking) => {
      this.http.post('http://localhost:5000/dmcpe-mifc/us-central1/bigben/sendAdmin', res).subscribe((result: any) => {
        console.log('server response', result);
      });
    });
    this.bookingObject.clientFiles.push(booking.clientFiles[0]);
    this.booking.next(this.bookingObject);
  }

}
