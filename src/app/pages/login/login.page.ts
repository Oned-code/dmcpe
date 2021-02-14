import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  name: string;
  mobile: number;
  repeatPassword: string;


  segId = 1;
  plt;
  tel: string;
  private file: File;

  constructor(
      private router: Router,
      public auth: AuthService,
      public uploadService: UploadService) {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

  changeSegment(val) {
    this.segId = val;
  }

  goToVerification() {
    this.auth.createAccount(this.email, this.password).then((result) => {
      console.log(result);
    });
    this.router.navigate(['/verification']);
  }

  login() {
    this.auth.emailSignin(this.email, this.password).then((result) => {
      console.log(result);
      if (result) {
        this.router.navigate(['/en-za/home']);
      }
    });
    // Do something else.
  }

  loginWithGoodgle() {
    this.auth.googleSignin().then((result) => {
      console.log(result);
      if (result) {
        this.router.navigate(['/en-za/home']);
      }
    });
    // Do something else.
  }

  uploadFile(e) {
    this.file = e.target.files[0];
    this.uploadService.uploadFile(this.file);
  }
}
