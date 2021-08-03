import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WindowOpenerService {
  async isItSunnyAsync() : Promise<boolean> {
    return new Promise<boolean>((resolve, reject)=>{
      resolve(true);
    });
  }

  isItSunny(): boolean {
    return true;
  }

  constructor() { 

  }
}
