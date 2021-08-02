import { TestBed } from '@angular/core/testing';

import { MainServiceSService } from './main-service-s.service';

describe('MainServiceSService', () => {
  let service: MainServiceSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainServiceSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
