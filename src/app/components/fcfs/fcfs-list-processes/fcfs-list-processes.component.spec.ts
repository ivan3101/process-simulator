import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcfsListProcessesComponent } from './fcfs-list-processes.component';

describe('FcfsListProcessesComponent', () => {
  let component: FcfsListProcessesComponent;
  let fixture: ComponentFixture<FcfsListProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcfsListProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcfsListProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
