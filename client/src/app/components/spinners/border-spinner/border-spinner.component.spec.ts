import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderSpinnerComponent } from './border-spinner.component';

describe('BorderSpinnerComponent', () => {
  let component: BorderSpinnerComponent;
  let fixture: ComponentFixture<BorderSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
