import { TestBed } from '@angular/core/testing';

import { CalledServiceService } from './called-service.service';

describe('CalledServiceService', () => {
  let service: CalledServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalledServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
