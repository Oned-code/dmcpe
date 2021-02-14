import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalleryContentPage } from './gallery-content.page';

describe('GalleryContentPage', () => {
  let component: GalleryContentPage;
  let fixture: ComponentFixture<GalleryContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
