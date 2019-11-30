import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomHackPopupComponent } from './rom-hack-popup.component';

describe('PopupComponent', () => {
  let component: RomHackPopupComponent;
  let fixture: ComponentFixture<RomHackPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomHackPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomHackPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
