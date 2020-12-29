import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  plt;
  constructor(private router: Router, private navCtrl: NavController) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  goToSuceess() {
    this.router.navigate(['/booking-success']);
  }
  goBack() {
    this.navCtrl.back();
  }

}
