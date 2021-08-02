import { TestBed } from '@angular/core/testing';
import { Mock } from 'protractor/built/driverProviders';
import { CarService } from './car.service';

import { DriverService } from './driver.service';
import { MockCar } from './mock-car.service';

describe('Driver', () => {
  let driver: DriverService;
  let mockCar : CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Create Driver and inject a MockCar instance
      providers: [ {provide:  CarService, useClass: MockCar}]
    });
    driver = TestBed.inject(DriverService);
    mockCar = TestBed.inject(CarService);
  });

  it('cannot drive a running car', () => {
    expect(driver.canDrive()).toBeFalsy();
  });

  xit('things that do not work', ()=>{
    // a manual mock, not a spy
    expect(mockCar.isRunning()).toHaveBeenCalled();
    // not defined by our mock
    expect(mockCar.start()).toBeUndefined();
  })
});

  

