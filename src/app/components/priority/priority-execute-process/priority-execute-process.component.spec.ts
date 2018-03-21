import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityExecuteProcessComponent } from './priority-execute-process.component';

describe('PriorityExecuteProcessComponent', () => {
  let component: PriorityExecuteProcessComponent;
  let fixture: ComponentFixture<PriorityExecuteProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityExecuteProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityExecuteProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
