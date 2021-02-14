import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.page.html',
  styleUrls: ['./service-content.page.scss'],
})
export class ServiceContentPage implements OnInit {

  constructor(private bookingService: BookingService, private router: Router) { }
  services = [
    {
      img: 'assets/imgs/carpentry.jpg',
      name : 'Carpentry',
      description: 'Carpentry &amp; Joinery - sourcing, cutting, shaping and installation ' +
          'during the construction of buildings, home renovations and furniture builds'
    },
    {
      img: 'assets/imgs/plumbing.jpg',
      name : 'Plumbing',
      description: 'Plumbing - design, installation, construction, replacement , service, repair, alteration,'
    },
    {
      img: 'assets/imgs/electrical.jpg',
      name : 'Electrical',
      description: 'Electrical Services and fittings -  electrical wiring of buildings, ' +
          'transmission lines, stationary machines, and related equipment.'
    },
  ];

  ngOnInit() {
  }

  goToSelectDate(serviceName: string) {
    this.bookingService.bookingObject.name = serviceName;
    this.bookingService.booking.next(this.bookingService.bookingObject);
    this.router.navigate(['/select-date']);
  }

}
