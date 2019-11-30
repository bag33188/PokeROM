import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseJumbotronComponent } from './showcase-jumbotron.component';

describe('JumbotronComponent', () => {
  let component: ShowcaseJumbotronComponent;
  let fixture: ComponentFixture<ShowcaseJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
