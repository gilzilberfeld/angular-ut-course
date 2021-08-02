import { TestBed } from '@angular/core/testing';
import { FactorialService } from './factorial.service';

describe('FactorialService', () => {
  let service: FactorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactorialService);
  });

  it('should calculate factorials correctly', () => {
    expect(FactorialService.calculate(0)).toBe(1);
    expect(FactorialService.calculate(1)).toBe(1);
    expect(FactorialService.calculate(3)).toBe(6);
    expect(FactorialService.calculate(6)).toBe(720);
    expect(FactorialService.calculate(10)).toBe(3628800);

  });
});
