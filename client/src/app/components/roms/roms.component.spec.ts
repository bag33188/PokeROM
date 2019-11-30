import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomsComponent } from './roms.component';

describe('RomsComponent', () => {
  let component: RomsComponent;
  let fixture: ComponentFixture<RomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
