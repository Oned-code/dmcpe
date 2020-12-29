import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cleaning-details',
  templateUrl: './cleaning-details.page.html',
  styleUrls: ['./cleaning-details.page.scss'],
})
export class ServiceDetailsPage implements OnInit {

  cleaner = 1 ;
  plt;
  private yourImageDataURL: any;
  constructor(private router: Router, private navCtrl: NavController) {
    this.plt = localStorage.getItem('platform');
  }
  ngOnInit() {
  }

  chooseClearner(val) {
    this.cleaner = val;
  }

  goToAddress() {
    this.router.navigate(['/add-address']);
  }

  goBack() {
    this.navCtrl.back();
  }

    loadImageFromDevice(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => { // note using fat arrow function here if we intend to point at current Class context.
        this.yourImageDataURL = reader.result.toString().replace('data:*/*;base64,','');
      };
      reader.onerror = (error) => {
        // handle errors
      };
    }
}
