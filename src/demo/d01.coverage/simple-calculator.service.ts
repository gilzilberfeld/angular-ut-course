import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleCalculatorService {

  add(i: number, j:number) : number {
		return i+j;
	}
}

