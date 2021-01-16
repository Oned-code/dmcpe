import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
// import { CalendarComponent } from 'ionic2-calendar/calendar';
import {ActivationStart, Router, RouterOutlet} from '@angular/router';
import {IonMenu, IonNav, IonSlide, IonSlides, MenuController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import { BookingService } from '../../services/booking.service';
import {User} from '../../models/user.model';
import {Booking} from '../../models/booking.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: User;

  constructor(
      private router: Router,
      public authService: AuthService,
      public bookingService: BookingService) {
    this.plt = localStorage.getItem('platform');
  }
  service;

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
  plt;

  @ViewChildren(IonSlides) slides: QueryList<IonSlides>;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  menuCntrl = new MenuController();
  slideOpts = {};

  ngOnInit() {
    this.authService.user$.subscribe((res) => {
      console.log(res);
      this.user = res;
    });


    this.router.events.subscribe(e => {
      console.log('checking routing' , e);
    });

    this.slideOpts =  {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: true,
      speed: 5000
    };
  }


  goToSelectDate(serviceName: string) {
    this.bookingService.bookingObject.name = serviceName;
    this.bookingService.booking.next(this.bookingService.bookingObject);
    this.router.navigate(['/select-date']);
  }

  goToNextSlide() {
    this.slides.forEach((slide) => { slide.slideNext(3); });
  }



  selectService(val) {
    this.service = val;
  }

  showMenu() {
    this.menuCntrl.open('menu');
  }
}
