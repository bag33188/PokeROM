import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IeModalContentComponent } from './ie-modal-content.component';

describe('ModalContentComponent', () => {
  let component: IeModalContentComponent;
  let fixture: ComponentFixture<IeModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IeModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IeModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
