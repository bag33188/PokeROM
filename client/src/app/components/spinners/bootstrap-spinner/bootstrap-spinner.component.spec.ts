import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSpinnerComponent } from './bootstrap-spinner.component';

describe('BootstrapSpinnerComponent', () => {
  let component: BootstrapSpinnerComponent;
  let fixture: ComponentFixture<BootstrapSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
