import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjfListProcessComponent } from './sjf-list-process.component';

describe('SjfListProcessComponent', () => {
  let component: SjfListProcessComponent;
  let fixture: ComponentFixture<SjfListProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjfListProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjfListProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
