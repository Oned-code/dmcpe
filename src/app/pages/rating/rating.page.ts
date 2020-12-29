import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  cleaner = 1;
  rate;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  selectCleaner(val) {
    this.cleaner = val;
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
