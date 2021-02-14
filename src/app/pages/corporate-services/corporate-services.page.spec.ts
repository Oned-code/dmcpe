import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorporateServicesPage } from './corporate-services.page';

describe('CorporateServicesPage', () => {
  let component: CorporateServicesPage;
  let fixture: ComponentFixture<CorporateServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
