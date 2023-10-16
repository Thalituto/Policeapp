import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfouserPage } from './infouser.page';

describe('InfouserPage', () => {
  let component: InfouserPage;
  let fixture: ComponentFixture<InfouserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfouserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfouserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
