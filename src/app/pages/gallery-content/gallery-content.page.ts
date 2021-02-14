import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {GalleryService} from '../../services/gallery.service';

@Component({
  selector: 'app-gallery-content',
  templateUrl: './gallery-content.page.html',
  styleUrls: ['./gallery-content.page.scss'],
})
export class GalleryContentPage implements OnInit {

  @Input() imageIndex: number;

  constructor(private modalCtrl: ModalController, private galleryService: GalleryService) { }

  imageList = this.galleryService.gallery;

  ngOnInit() {
    console.log(this.imageIndex);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  next() {
    this.imageIndex = this.imageIndex < this.imageList.length - 1 ? this.imageIndex + 1 : this.imageIndex;
    console.log(this.imageIndex);
  }

  back() {
    this.imageIndex = this.imageIndex > 0 ? this.imageIndex - 1 : 0;
    console.log(this.imageIndex);
  }
}
