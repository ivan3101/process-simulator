import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityCreateProcessComponent } from './priority-create-process.component';

describe('PriorityCreateProcessComponent', () => {
  let component: PriorityCreateProcessComponent;
  let fixture: ComponentFixture<PriorityCreateProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityCreateProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityCreateProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
