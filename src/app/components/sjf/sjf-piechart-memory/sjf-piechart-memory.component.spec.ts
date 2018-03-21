import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjfPiechartMemoryComponent } from './sjf-piechart-memory.component';

describe('SjfPiechartMemoryComponent', () => {
  let component: SjfPiechartMemoryComponent;
  let fixture: ComponentFixture<SjfPiechartMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjfPiechartMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjfPiechartMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
