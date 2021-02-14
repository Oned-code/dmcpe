import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContentHeaderPage } from './content-header.page';

describe('ContentHeaderPage', () => {
  let component: ContentHeaderPage;
  let fixture: ComponentFixture<ContentHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHeaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
