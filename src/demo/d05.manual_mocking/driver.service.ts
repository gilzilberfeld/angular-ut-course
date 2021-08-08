import { Injectable } from '@angular/core';
import { ACMode, AirCondition } from './aircondition';
import { CarService } from './car.service';

@Injectable({
	providedIn: 'root'
})
export class DriverService {

	car: CarService;
	isCarBroken: boolean = false;

	constructor(car: CarService) {
		this.car = car;
	}

	canDrive(): boolean {
		return !this.car.isRunning();
	}

	drive() {
		this.car.setAC(new AirCondition(ACMode.On));
		this.car.start();
	}

	checkTemp() {
		this.car.temperature.subscribe(
			temp => {
				if (temp > 50)
					this.isCarBroken = true;
				else
					this.isCarBroken = false;
			}
		);
	}

	shouldGoToGarage(): boolean {
		return this.isCarBroken;
	}

}

// 
// todo: 
// mocked observable example