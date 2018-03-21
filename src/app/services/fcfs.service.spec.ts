import { TestBed, inject } from '@angular/core/testing';

import { FcfsService } from './fcfs.service';

describe('FcfsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FcfsService]
    });
  });

  it('should be created', inject([FcfsService], (service: FcfsService) => {
    expect(service).toBeTruthy();
  }));
});
