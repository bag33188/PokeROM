import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyAlertComponent } from './privacy-alert.component';

describe('AlertComponent', () => {
  let component: PrivacyAlertComponent;
  let fixture: ComponentFixture<PrivacyAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
