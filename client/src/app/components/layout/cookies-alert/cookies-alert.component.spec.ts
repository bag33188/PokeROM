import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesAlertComponent } from './cookies-alert.component';

describe('CookiesAlertComponent', () => {
  let component: CookiesAlertComponent;
  let fixture: ComponentFixture<CookiesAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
