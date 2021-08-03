import { Injectable } from '@angular/core';
import { AirCondition } from './aircondition';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }
  isRunning() :  boolean{
		throw new Error("Not yet");
	}

	setAC( ac: AirCondition) {
		throw new Error("Not yet");
	}

	start() {
		throw new Error("Not yet");	
	}

}
