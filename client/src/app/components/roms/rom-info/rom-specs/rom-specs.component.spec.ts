import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomSpecsComponent } from './rom-specs.component';

describe('RomSpecsComponent', () => {
  let component: RomSpecsComponent;
  let fixture: ComponentFixture<RomSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
