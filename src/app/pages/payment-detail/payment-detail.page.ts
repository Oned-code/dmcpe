import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.page.html',
  styleUrls: ['./payment-detail.page.scss'],
})
export class PaymentDetailPage implements OnInit {

  method = 1;
  plt;
  constructor(private router: Router, private navCtrl: NavController) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  chooseMethod(val) {
    this.method = val;
  }

  goToAddCard() {
    this.router.navigate(['/add-card']);
  }

  goBack() {
    this.navCtrl.back();
  }

}
