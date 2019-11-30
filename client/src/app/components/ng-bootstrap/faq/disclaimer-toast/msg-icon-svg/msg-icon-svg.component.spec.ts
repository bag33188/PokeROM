import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgIconSvgComponent } from './msg-icon-svg.component';

describe('ToastComponent', () => {
  let component: MsgIconSvgComponent;
  let fixture: ComponentFixture<MsgIconSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgIconSvgComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
