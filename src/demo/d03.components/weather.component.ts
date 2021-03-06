import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'weather-comp',
  template: `
    <button (click)="change()">Click me!</button>
    <span>{{message}}</span>`
})

export class WeatherForcastComponent {
  isSunny: boolean;

  constructor() {
    
  }
  change() { 
    this.isSunny = !this.isSunny; 
  }
  get message() { return `The weather is ${this.isSunny ? 'Sunny' : 'Rainy'}`; }

  ngOnInit(): void {
   this.isSunny = true;
  }
}

