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
  slidesList = [{
    title: 'This is what we do',
    description: 'For all your Home and renovation needs',
    link: '/en-za/services',
    background: 'url(assets/imgs/slide1.jpg)',
    buttonText: 'Find out more...'
  }, {
    title: 'We See Art in Timber',
    description: 'For all your Home and renovation needs',
    link: '/en-za/services',
    serviceName: 'carpentry',
    background: 'url(assets/imgs/carpentry-big.jpg)',
    buttonText: 'Book a Consultation',
    get service() {
      return this.serviceName;
    },
    function: () => {
      this.goToSelectDate(this.slidesList[1].service);
    }
  }, {
    title: 'Prevent Leaks!',
    description: 'Get all your plumbing needs, sorted.',
    link: '/en-za/services',
    background: 'url(assets/imgs/slide3.jpg)',
    buttonText: 'Book a Consultation',
  }];

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

    if (this.authService.isActivated) {
      this.authService.user$.subscribe((res) => {
        console.log(res);
        this.user = res;
      });
    }



    this.router.events.subscribe(e => {
      console.log('checking routing' , e);
    });

    this.slideOpts =  {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: true,
      speed: 5000,
      loop: true
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

  extendSlides(e: IonSlide) {
    // const pushBack = this.slidesList[0];
    // this.slidesList.push(pushBack);
    // console.log(e , this.slidesList);
  }

  goToPage(url) {
    console.log(url);
    this.router.navigate([url]);
  }
}
