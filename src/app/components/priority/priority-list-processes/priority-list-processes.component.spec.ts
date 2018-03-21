import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityListProcessesComponent } from './priority-list-processes.component';

describe('PriorityListProcessesComponent', () => {
  let component: PriorityListProcessesComponent;
  let fixture: ComponentFixture<PriorityListProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityListProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityListProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
