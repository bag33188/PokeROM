import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkFavoriteComponent } from './mark-favorite.component';

describe('MarkFavoriteComponent', () => {
  let component: MarkFavoriteComponent;
  let fixture: ComponentFixture<MarkFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
