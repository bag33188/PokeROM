import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSpecsComponent } from './game-specs.component';

describe('GameSpecsComponent', () => {
  let component: GameSpecsComponent;
  let fixture: ComponentFixture<GameSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
