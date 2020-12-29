import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.page.html',
  styleUrls: ['./booking-summary.page.scss'],
})
export class BookingSummaryPage implements OnInit {

  plt;
  constructor(private navCtrl: NavController) {
    this.plt = localStorage.getItem('platform');
  }
  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
