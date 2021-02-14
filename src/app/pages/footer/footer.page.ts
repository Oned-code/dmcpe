import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    gotoAddress() {
      this.router.navigate(['/add-address']);
    }
}
