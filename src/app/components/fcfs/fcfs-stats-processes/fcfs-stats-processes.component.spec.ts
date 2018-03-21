import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcfsStatsProcessesComponent } from './fcfs-stats-processes.component';

describe('FcfsStatsProcessesComponent', () => {
  let component: FcfsStatsProcessesComponent;
  let fixture: ComponentFixture<FcfsStatsProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcfsStatsProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcfsStatsProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
