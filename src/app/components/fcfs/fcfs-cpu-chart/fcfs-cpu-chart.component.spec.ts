import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcfsCpuChartComponent } from './fcfs-cpu-chart.component';

describe('FcfsCpuChartComponent', () => {
  let component: FcfsCpuChartComponent;
  let fixture: ComponentFixture<FcfsCpuChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcfsCpuChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcfsCpuChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
