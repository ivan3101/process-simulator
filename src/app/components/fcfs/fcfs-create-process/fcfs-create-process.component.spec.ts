import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcfsCreateProcessComponent } from './fcfs-create-process.component';

describe('FcfsCreateProcessComponent', () => {
  let component: FcfsCreateProcessComponent;
  let fixture: ComponentFixture<FcfsCreateProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcfsCreateProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcfsCreateProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
