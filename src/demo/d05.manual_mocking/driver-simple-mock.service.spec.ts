import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CarService } from './car.service';
import { DriverService } from './driver.service';
import { DerivedMockCar } from "./mocks/DerivedMockCar";

describe('Driver with simple manual mock', () => {
  let driver: DriverService;
  let mockCar: CarService;

  beforeEach(() => {
    mockCar = new DerivedMockCar();
    driver = new DriverService(mockCar);
  });

  it('cannot drive a running car using a derived mock', () => {
    expect(driver.canDrive()).toBeFalsy();
  });

  it('should go to garage when temperature is high with mock observables', () => {
    expect(driver.shouldGoToGarage()).toBe(false);
    driver.checkTemp();
    // all values were streamed
    expect(driver.shouldGoToGarage()).toBe(true);
  });

  it('mock temperature values to check garage logic', ()=>{
    mockCar.temperature = of(100);
    driver.checkTemp();
    expect(driver.shouldGoToGarage()).toBe(true);
    mockCar.temperature = of(0);
    driver.checkTemp();
    expect(driver.shouldGoToGarage()).toBe(false);
  });

  xit('cannot check on method calls', () => {
    driver.canDrive();
    // we used a real object, not a spy
    expect(mockCar.isRunning).toHaveBeenCalled();
  })
});
