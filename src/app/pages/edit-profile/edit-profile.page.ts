import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  plt;
  constructor(private actionSheet: ActionSheetController, private navCtrl: NavController, private router: Router) {
    this.plt = localStorage.getItem('platform');
  }


  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Choose Image',
      mode: 'md',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            console.log('Camera');
          }
        },
        {
          text: 'Gallery',
          icon: 'image-outline',
          handler: () => {
            console.log('Gallery');
          }
        }]
    });
    await actionSheet.present();
  }

  goBack() {
    this.navCtrl.back();
  }

  goToProfile() {
    this.router.navigate(['/en-za/profile']);
  }

}
