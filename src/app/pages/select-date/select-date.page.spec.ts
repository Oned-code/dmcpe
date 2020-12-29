import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectDatePage } from './select-date.page';

describe('SelectDatePage', () => {
  let component: SelectDatePage;
  let fixture: ComponentFixture<SelectDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
