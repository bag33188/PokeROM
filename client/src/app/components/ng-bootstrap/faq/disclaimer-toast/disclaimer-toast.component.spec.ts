import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerToastComponent } from './disclaimer-toast.component';

describe('ToastComponent', () => {
  let component: DisclaimerToastComponent;
  let fixture: ComponentFixture<DisclaimerToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
