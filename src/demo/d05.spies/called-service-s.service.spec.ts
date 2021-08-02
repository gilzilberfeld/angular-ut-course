import { TestBed } from '@angular/core/testing';

import { CalledServiceSService } from './called-service-s.service';

describe('CalledServiceSService', () => {
  let service: CalledServiceSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalledServiceSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
