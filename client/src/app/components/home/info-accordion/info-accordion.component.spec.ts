import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAccordionComponent } from './info-accordion.component';

describe('AccordionComponent', () => {
  let component: InfoAccordionComponent;
  let fixture: ComponentFixture<InfoAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
