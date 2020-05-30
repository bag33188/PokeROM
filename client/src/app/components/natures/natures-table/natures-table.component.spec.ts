import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturesTableComponent } from './natures-table.component';

describe('NaturesTableComponent', () => {
  let component: NaturesTableComponent;
  let fixture: ComponentFixture<NaturesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
