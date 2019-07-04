import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaVersionAlertComponent } from './beta-version-alert.component';

describe('BetaVersionAlertComponent', () => {
  let component: BetaVersionAlertComponent;
  let fixture: ComponentFixture<BetaVersionAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaVersionAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaVersionAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
