import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityCpuChartComponent } from './priority-cpu-chart.component';

describe('PriorityCpuChartComponent', () => {
  let component: PriorityCpuChartComponent;
  let fixture: ComponentFixture<PriorityCpuChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityCpuChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityCpuChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
