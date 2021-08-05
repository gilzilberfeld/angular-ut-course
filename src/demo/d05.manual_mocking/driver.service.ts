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
		if (!this.hasKeys())
			return false;
		return !this.car.isRunning();
	}

	hasKeys(): boolean {
		return true;
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