import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  segmentID = 'current';
  plt;
  constructor() {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  segmentChanged(event) {
    console.log(event.detail.value);
    this.segmentID = event.detail.value;
  }

}
