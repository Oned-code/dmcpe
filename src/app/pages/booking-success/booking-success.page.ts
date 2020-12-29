import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingSummaryPage } from '../booking-summary/booking-summary.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.page.html',
  styleUrls: ['./booking-success.page.scss'],
})
export class BookingSuccessPage implements OnInit {

  plt;
  constructor(private router: Router, private modalController: ModalController) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  async goToBooking() {
    const modal = await this.modalController.create({
      component: BookingSummaryPage,
      cssClass: 'custom_modal'
    });
    return await modal.present();
  }

  goToHome() {
    this.router.navigate(['/tabs/home']);
  }

}
