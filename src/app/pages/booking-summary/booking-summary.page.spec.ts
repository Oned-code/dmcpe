import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingSummaryPage } from './booking-summary.page';

describe('BookingSummaryPage', () => {
  let component: BookingSummaryPage;
  let fixture: ComponentFixture<BookingSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
