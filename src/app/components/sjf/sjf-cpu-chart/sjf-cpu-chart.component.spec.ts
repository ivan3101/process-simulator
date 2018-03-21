import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjfCpuChartComponent } from './sjf-cpu-chart.component';

describe('SjfCpuChartComponent', () => {
  let component: SjfCpuChartComponent;
  let fixture: ComponentFixture<SjfCpuChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjfCpuChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjfCpuChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
