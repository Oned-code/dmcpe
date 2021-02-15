import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
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
  isContactUs = this.router.url.split('?')[1] ? this.router.url.split('?')[1].split('=')[1] : false ; // .queryParams.isContactUs;

  constructor(
      private router: Router,
      private navCtrl: NavController,
      private bookingService: BookingService,
      private http: HttpClient) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
    console.log('State Snapshot', this.isContactUs);
  }

  goToSuceess() {
    if (this.isContactUs) {
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
    } else {
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
  }
  goBack() {
    this.navCtrl.back();
  }

}
