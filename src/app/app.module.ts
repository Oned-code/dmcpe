import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgOtpInputModule } from 'ng-otp-input';
import { NgCalendarModule } from 'ionic2-calendar';
import { IonicRatingModule } from 'ionic-rating';

import { BookingSummaryPageModule } from '../app/pages/booking-summary/booking-summary.module';
import { RatingPageModule } from '../app/pages/rating/rating.module';
import { OneSignal } from '@ionic-native/onesignal/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgOtpInputModule,
    NgCalendarModule,
    BookingSummaryPageModule,
    RatingPageModule,
    IonicRatingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
