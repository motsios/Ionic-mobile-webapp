import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddnotePage } from './addnote.page';

describe('AddnotePage', () => {
  let component: AddnotePage;
  let fixture: ComponentFixture<AddnotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddnotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
