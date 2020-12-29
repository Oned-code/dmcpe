import { Component, OnInit, ViewChild } from '@angular/core';
// import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  service;

  services = [
    {
      img: 'assets/imgs/construct-outline',
      name : 'Construction work'
    },
    {
      img: 'assets/imgs/car-outline.png',
      name : 'Transportation'
    },
    {
      img: 'assets/imgs/water-outline',
      name : 'Plumbing Work'
    },
    {
      img: 'assets/imgs/power-outline',
      name : 'Electrical Work'
    },
    {
      img: 'assets/imgs/hammer.png',
      name : 'Carpenter Work'
    },
  ];
  plt;
  
  constructor(private router: Router) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  goToSelectDate() {
    this.router.navigate(['/select-date']);
  }

  selectService(val) {
    this.service = val;
  }

}
