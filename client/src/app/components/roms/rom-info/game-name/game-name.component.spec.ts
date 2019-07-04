import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNameComponent } from './game-name.component';

describe('GameNameComponent', () => {
  let component: GameNameComponent;
  let fixture: ComponentFixture<GameNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
