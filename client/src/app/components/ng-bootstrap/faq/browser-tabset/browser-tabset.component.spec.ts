import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserTabsetComponent } from './browser-tabset.component';

describe('TabsetComponent', () => {
  let component: BrowserTabsetComponent;
  let fixture: ComponentFixture<BrowserTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
