import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomDownloadComponent } from './rom-download.component';

describe('RomDownloadComponent', () => {
  let component: RomDownloadComponent;
  let fixture: ComponentFixture<RomDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
