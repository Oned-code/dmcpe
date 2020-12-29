import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  segId = 1;
  plt;
  constructor(private router: Router) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  changeSegment(val) {
    this.segId = val;
  }

  goToVerification() {
    this.router.navigate(['/verification']);
  }

}
