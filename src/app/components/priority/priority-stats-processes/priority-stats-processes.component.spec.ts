import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityStatsProcessesComponent } from './priority-stats-processes.component';

describe('PriorityStatsProcessesComponent', () => {
  let component: PriorityStatsProcessesComponent;
  let fixture: ComponentFixture<PriorityStatsProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityStatsProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityStatsProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
