import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  plt;
  constructor(private router: Router) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  goToHistory() {
    this.router.navigate(['/tabs/history']);
  }

  goToBooking() {
    this.router.navigate(['/tabs/booking']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  goToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

}
