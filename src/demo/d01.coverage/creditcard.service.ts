import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  expirationDate : Date;

  constructor(  expirationDate : Date) { 
    this.expirationDate =  expirationDate;
  }

  isExpired() : boolean{
		let today = new Date();

		if (today < this.expirationDate )
			return true;
		else
			return false;
	}


}
