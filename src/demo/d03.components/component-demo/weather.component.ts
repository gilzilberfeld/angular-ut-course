import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'clicker-comp',
  template: `
    <button (click)="clicked()">Click me!</button>
    <span>{{message}}</span>`
})

export class WeatherForcastComponent {
  isSunny: boolean;

  constructor() {
    
  }
  clicked() { 
    this.isSunny = !this.isSunny; 
  }
  get message() { return `The weather is ${this.isSunny ? 'Sunny' : 'Rainy'}`; }

  ngOnInit(): void {
   this.isSunny = true;
  }
}

// todo: 
// add: things for running tests, not mocking
//    before each async  + then.
//    ngOnInit thing that fails
//    async / await
//    promises
//    checking the DOM + detectchanges
