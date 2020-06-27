import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnenotePage } from './onenote.page';

describe('OnenotePage', () => {
  let component: OnenotePage;
  let fixture: ComponentFixture<OnenotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnenotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnenotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
