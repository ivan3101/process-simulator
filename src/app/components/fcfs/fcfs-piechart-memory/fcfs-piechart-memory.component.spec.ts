import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcfsPiechartMemoryComponent } from './fcfs-piechart-memory.component';

describe('FcfsPiechartMemoryComponent', () => {
  let component: FcfsPiechartMemoryComponent;
  let fixture: ComponentFixture<FcfsPiechartMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcfsPiechartMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcfsPiechartMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
