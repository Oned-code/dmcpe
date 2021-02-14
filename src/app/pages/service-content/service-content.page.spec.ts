import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceContentPage } from './service-content.page';

describe('ServiceContentPage', () => {
  let component: ServiceContentPage;
  let fixture: ComponentFixture<ServiceContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
