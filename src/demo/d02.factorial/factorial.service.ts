import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactorialService {

  static calculate(theNumber : number) : number {
		if (theNumber <= 1)
			return 1;
		else
			return FactorialService.calculate(theNumber-1)*theNumber;
	}

}

