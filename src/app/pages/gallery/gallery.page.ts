import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {GalleryContentPage} from '../gallery-content/gallery-content.page';
import {GalleryService} from '../../services/gallery.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  galleryList: any[];
  reviewers = [{
    // tslint:disable-next-line:max-line-length
    comment: 'I did not expect the level of professionalism, I recieved from DMCPE, I did not have to worry about project completion dates and constant monitoring. Everything was done in expected and with great quality.',
    date: '2020-10-03',
    name: 'Bongani Simelane'
  }, {}, {}, {}, ];

  constructor(private modalCntrl: ModalController, private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getGallery().then(res => {
      this.galleryList = res;
      console.log(this.galleryList);
    });
  }

  async viewGallery(imageIndex: number) {
    console.log('in modal');
    const modal = await this.modalCntrl.create({
      component: GalleryContentPage,
      cssClass: 'dmcpe-gallery',
      componentProps: {
        imageIndex,
      },
      animated: true,
    });
    return await modal.present();
  }
}
