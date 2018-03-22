import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskDrawComponent } from './disk-draw.component';

describe('DiskDrawComponent', () => {
  let component: DiskDrawComponent;
  let fixture: ComponentFixture<DiskDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiskDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
