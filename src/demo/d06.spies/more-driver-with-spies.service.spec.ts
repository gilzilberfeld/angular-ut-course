import { TestBed } from '@angular/core/testing';
import { ACMode, AirCondition } from '../d05.manual_mocking/aircondition';
import { CarService } from '../d05.manual_mocking/car.service';
import { DriverService } from '../d05.manual_mocking/driver.service';

describe('Driver with partial mocking', () => {
  let driver: DriverService;
  let mockCar : CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {provide:  CarService, useClass: CarService}]
    });
    driver = TestBed.inject(DriverService);
    mockCar = TestBed.inject(CarService);
  });

  it('cannot drive a running car', () => {
    spyOn(mockCar, 'isRunning').and.returnValue(true);
    expect(driver.canDrive()).toBeFalsy();
  });

  it('or may be it can', () => {
    spyOn(mockCar, 'isRunning').and.returnValue(false);
    expect(driver.canDrive()).toBeTrue();
  });

  it('can now check on method calls', ()=>{
    spyOn(mockCar, 'isRunning').and.returnValue(true);
    driver.canDrive();
    expect(mockCar.isRunning).toHaveBeenCalled();
  });

  it ('can even check the arguments', ()=>{
    spyOn(mockCar,'setAC').and.stub();
    spyOn(mockCar,'start').and.stub();

    driver.drive();
    expect(mockCar.setAC).toHaveBeenCalledWith(jasmine.objectContaining({
      mode: ACMode.On
    }));
    });
});
