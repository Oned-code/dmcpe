import {Component, ViewChild} from '@angular/core';

import {IonMenu, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import {viewClassName} from '@angular/compiler';
import {createViewChild} from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  plt;
    @ViewChild('#menu') menu: IonMenu;

    nav = [
      {
        name: 'About Us',
        icon: 'newspaper',
        link: '/en-za/about-us',
      },
      {
        name: 'Services',
        icon: 'person',
        link: '/en-za/services',
        children: [
            {
              name: 'Home & Micro Renovations',
              icon: '',
              link: '/en-za/services'
            }, {
              name: 'Corporate & Developers',
              icon: '',
              link: '/en-za/corporate-services'
            }]
      },
      {
        name: 'Gallery & Reviews',
        icon: 'chatbubbles',
        link: '/en-za/gallery-&-reviews',
      },
      {
        name: 'Contact us',
        icon: 'chatbubbles',
        link: '/en-za/contact-us',
      }
    ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    public auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(async () => {
        await this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);
        this.oneSignal.getIds().then((data) => {
          console.log('iddddd', data);
          localStorage.setItem('fcm', data.userId);
        });
        await this.oneSignal.endInit();
      }, 1000);
      if (this.platform.is('ios')) {
        localStorage.setItem('platform', 'ios');
        this.plt = localStorage.getItem('platform');
      } else {
        localStorage.setItem('platform', 'android');
        this.plt = localStorage.getItem('platform');
        console.log(this.plt);
      }

      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
}
