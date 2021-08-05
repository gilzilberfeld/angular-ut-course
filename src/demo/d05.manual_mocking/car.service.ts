import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirCondition } from './aircondition';

@Injectable({
  providedIn: 'root'
})
export class CarService {

	temperature: Observable<number>;

	constructor() { 

	}
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
