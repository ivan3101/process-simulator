import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjfStatsProcessComponent } from './sjf-stats-process.component';

describe('SjfStatsProcessComponent', () => {
  let component: SjfStatsProcessComponent;
  let fixture: ComponentFixture<SjfStatsProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjfStatsProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjfStatsProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
