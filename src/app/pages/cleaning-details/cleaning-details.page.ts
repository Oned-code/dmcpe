import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {updateLocale} from 'moment';
import {UploadService} from '../../services/upload.service';
import {BookingService} from '../../services/booking.service';

@Component({
  selector: 'app-cleaning-details',
  templateUrl: './cleaning-details.page.html',
  styleUrls: ['./cleaning-details.page.scss'],
})
export class ServiceDetailsPage implements OnInit {

  cleaner = 1 ;
  plt;
  yourImageDataURL: any;
  materialDescription = '';
  material = 'No';
  constructor(
      private router: Router,
      private navCtrl: NavController,
      private uploadService: UploadService,
      private bookingService: BookingService) {
    this.plt = localStorage.getItem('platform');
  }
  ngOnInit() {
  }

  chooseClearner(val) {
    this.cleaner = val;
  }

  goToAddress() {
    this.bookingService.bookingObject.material = this.material;
    this.bookingService.bookingObject.materialDescription = this.materialDescription;

    console.log(this.materialDescription);
    console.log(this.material);
    console.log(this.bookingService.bookingObject);

    this.router.navigate(['/add-address']);
  }

  goBack() {
    this.navCtrl.back();
  }

    loadImageFromDevice(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => { // note using fat arrow function here if we intend to point at current Class context.
        this.yourImageDataURL = reader.result.toString().replace('data:*/*;base64,','');
        this.bookingService.bookingObject.clientFiles.push(this.yourImageDataURL);
      };
      reader.onerror = (error) => {
        // handle errors
      };
    }
}
