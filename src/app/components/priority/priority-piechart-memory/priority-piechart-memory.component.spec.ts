import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityPiechartMemoryComponent } from './priority-piechart-memory.component';

describe('PriorityPiechartMemoryComponent', () => {
  let component: PriorityPiechartMemoryComponent;
  let fixture: ComponentFixture<PriorityPiechartMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityPiechartMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityPiechartMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
