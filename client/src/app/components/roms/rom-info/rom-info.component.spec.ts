import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomInfoComponent } from './rom-info.component';

describe('RomInfoComponent', () => {
  let component: RomInfoComponent;
  let fixture: ComponentFixture<RomInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
