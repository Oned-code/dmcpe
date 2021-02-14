import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor() { }

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

}
