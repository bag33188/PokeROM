import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashCarouselComponent } from './splash-carousel.component';

describe('CarouselComponent', () => {
  let component: SplashCarouselComponent;
  let fixture: ComponentFixture<SplashCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
