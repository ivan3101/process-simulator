import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjfCreateProcessComponent } from './sjf-create-process.component';

describe('SjfCreateProcessComponent', () => {
  let component: SjfCreateProcessComponent;
  let fixture: ComponentFixture<SjfCreateProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjfCreateProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjfCreateProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
