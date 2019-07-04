import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberValidatorComponent } from './phone-number-validator.component';

describe('PhoneNumberValidatorComponent', () => {
  let component: PhoneNumberValidatorComponent;
  let fixture: ComponentFixture<PhoneNumberValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
