import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px',
      'border': 'none',
      'border-bottom': '3px solid var(--ion-color-primary)',
      'border-radius': '0px'
    }
  };

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/en-za/home']);
  }

}
