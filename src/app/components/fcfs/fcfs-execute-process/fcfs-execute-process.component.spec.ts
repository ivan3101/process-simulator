import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcfsExecuteProcessComponent } from './fcfs-execute-process.component';

describe('FcfsExecuteProcessComponent', () => {
  let component: FcfsExecuteProcessComponent;
  let fixture: ComponentFixture<FcfsExecuteProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcfsExecuteProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcfsExecuteProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
