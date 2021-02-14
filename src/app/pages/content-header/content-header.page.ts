import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.page.html',
  styleUrls: ['./content-header.page.scss'],
})
export class ContentHeaderPage implements OnInit {


  constructor( private navCtrl: NavController, private router: Router) {
    this.canShow = this.router.url.toLowerCase().indexOf('home') <= -1;
  }
  canShow = false;
  ngOnInit() {
    console.log(this.router.url);
  }


  goBack() {
    this.navCtrl.back();
  }

}
