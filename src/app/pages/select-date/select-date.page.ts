import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import {BookingService} from '../../services/booking.service';


@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.page.html',
  styleUrls: ['./select-date.page.scss'],
})
export class SelectDatePage implements OnInit {

  @ViewChild(CalendarComponent, { static: false }) myCal: CalendarComponent;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  currnetMonth;
  date;
  myDate;
  todayDate;
  plt;

  constructor(private router: Router,
              private navCtrl: NavController,
              private bookingService: BookingService
              ) {
    this.plt = localStorage.getItem('platform');
    this.todayDate = moment();
  }

  ngOnInit() {
    this.currnetMonth = this.getDate(new Date());

    console.log(this.currnetMonth);
  }

  getDate(date) {
    var d = new Date(date);
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    var c = monthNames[d.getMonth()];
    return c;
  }

  goToCleaningDetail() {
    this.router.navigate(['/cleaning-details']);
  }

  onCurrentDateChanged(event) {
    this.bookingService.bookingObject.startDate = event;
    console.log(event);
    this.currnetMonth = this.getDate(event);
    console.log(this.currnetMonth);
    console.log('====', this.currnetMonth);
  }

  back() {
    this.date = this.todayDate.subtract(1,'days').toDate();
    this.myDate = moment(this.date).format('ddd, Do MMMM')
    var swiper = document.querySelector('.swiper-container')['swiper'];
    var date = moment().add('-1', 'M').toLocaleString();
    this.currnetMonth = this.getDate(date);
    swiper.slidePrev();
  }

  next() {
    this.date = this.todayDate.add(1,'days').toDate();
    this.myDate = moment(this.date).format('ddd, Do MMMM');
    var swiper = document.querySelector('.swiper-container')['swiper'];

    console.log(swiper);
    swiper.slideNext();
  }

  goBack() {
    this.navCtrl.back();
  }

}
