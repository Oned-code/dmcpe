import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {BookingService} from '../../services/booking.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  plt;
  clientName = '';
  city = '';
  postcode = '';
  contactNumber = 0;
  clientEmail = '';
  streetAddress = '';

  constructor(
      private router: Router,
      private navCtrl: NavController,
      private bookingService: BookingService,
      private http: HttpClient) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  goToSuceess() {
    this.bookingService.bookingObject.streetAddress = this.streetAddress;
    this.bookingService.bookingObject.postcode = this.postcode;
    this.bookingService.bookingObject.contactNumber = this.contactNumber;
    this.bookingService.bookingObject.clientName = this.clientName;
    this.bookingService.bookingObject.clientEmail = this.clientEmail;
    this.bookingService.bookingObject.city = this.city;
    this.http.post('http://localhost:5001/dmcpe-mifc/us-central1/bigben/sendAdmin', this.bookingService.bookingObject).subscribe((result: any) => {
         console.log('server response', result);
    });
    console.log(this.bookingService.bookingObject);
    this.router.navigate(['/booking-success']);
  }
  goBack() {
    this.navCtrl.back();
  }

}
