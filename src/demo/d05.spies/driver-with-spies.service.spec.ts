import { TestBed } from '@angular/core/testing';
import { Console } from 'console';
import { ACMode, AirCondition } from '../d04.manual_mocking/aircondition';
import { CarService } from '../d04.manual_mocking/car.service';
import { DriverService } from '../d04.manual_mocking/driver.service';

describe('Driver with spies', () => {
  let driver: DriverService;
  let mockCar : CarService;
  var carSpy;

  beforeEach(() => {
    // allow multiple setting of behavior
    jasmine.getEnv().allowRespy(true);

    // set up the spy on the method(s)
    carSpy = jasmine.createSpyObj('carSpy',['isRunning', 'setAC', 'start']);
    TestBed.configureTestingModule({
      // Create Driver and inject the spy instance
      providers: [ {provide:  CarService, useValue: carSpy}]
    });
    driver = TestBed.inject(DriverService);
    mockCar = TestBed.inject(CarService);
  });

  it('cannot drive a running car', () => {
    carSpy.isRunning.and.returnValue(true);
    expect(driver.canDrive()).toBeFalsy();
  });

  it('or may be it can', () => {
    carSpy.isRunning.and.returnValue(false);
    expect(driver.canDrive()).toBeTrue();
  });

  it('can now check on method calls', ()=>{
    driver.canDrive();
    expect(mockCar.isRunning).toHaveBeenCalled();
    // OR
    expect(carSpy.isRunning.calls.argsFor(0)).toEqual([]);

  });

  it ('can even check the arguments', ()=>{
    driver.drive();
    expect(mockCar.setAC).toHaveBeenCalledWith(jasmine.objectContaining({
      mode: ACMode.On
    }));
    // OR
    const theArg = carSpy.setAC.calls.argsFor(0)[0];
    var theMode = theArg['mode'];
    expect(theMode).toEqual(ACMode.On);
    });
});
