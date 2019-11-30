import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRomsComponent } from './update-roms.component';

describe('UpdateRomsComponent', () => {
  let component: UpdateRomsComponent;
  let fixture: ComponentFixture<UpdateRomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
