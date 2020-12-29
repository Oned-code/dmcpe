import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  plt;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal
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
