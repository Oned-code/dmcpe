import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RatingPage } from '../rating/rating.page';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  plt;
  constructor(private modalController: ModalController) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  async goToRating() {
    const modal = await this.modalController.create({
      component: RatingPage,
      cssClass: 'custom_modal'
    });
    return await modal.present();
  }

}
