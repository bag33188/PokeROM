import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomsPaginationComponent } from './roms-pagination.component';

describe('PaginationComponent', () => {
  let component: RomsPaginationComponent;
  let fixture: ComponentFixture<RomsPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomsPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
