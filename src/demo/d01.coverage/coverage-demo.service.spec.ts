import { TestBed } from '@angular/core/testing';

import { CoverageDemoService } from './coverage-demo.service';

describe('CoverageDemoService', () => {
  let service: CoverageDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoverageDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
