import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserBtnComponent } from './delete-user-btn.component';

describe('DeleteBtnComponent', () => {
  let component: DeleteUserBtnComponent;
  let fixture: ComponentFixture<DeleteUserBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
