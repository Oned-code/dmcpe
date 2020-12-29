import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

  plt;
  constructor(private router: Router, private modalController: ModalController, private navCtrl: NavController) {
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
