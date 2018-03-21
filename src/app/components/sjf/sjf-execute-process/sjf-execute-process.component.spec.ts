import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjfExecuteProcessComponent } from './sjf-execute-process.component';

describe('SjfExecuteProcessComponent', () => {
  let component: SjfExecuteProcessComponent;
  let fixture: ComponentFixture<SjfExecuteProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjfExecuteProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjfExecuteProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
