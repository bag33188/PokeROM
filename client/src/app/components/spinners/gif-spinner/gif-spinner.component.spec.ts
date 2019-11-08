import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSpinnerComponent } from './gif-spinner.component';

describe('GifSpinnerComponent', () => {
  let component: GifSpinnerComponent;
  let fixture: ComponentFixture<GifSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
