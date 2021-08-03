import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';
import { DriverService } from './driver.service';
import { DerivedMockCar } from "./mocks/DerivedMockCar";

describe('Driver with simple manual mock', () => {
  let driver: DriverService;
  let mockCar : CarService;

  beforeEach(() => {
    mockCar = new DerivedMockCar();
    driver = new DriverService(mockCar);
  });

  it('cannot drive a running car using a derived mock', () => {
    expect(driver.canDrive()).toBeFalsy();
  });


  xit('cannot check on method calls', ()=>{
    driver.canDrive();
    // we used a real object, not a spy
    expect(mockCar.isRunning).toHaveBeenCalled();
  })
});
