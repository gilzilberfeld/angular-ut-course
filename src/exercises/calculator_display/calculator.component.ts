import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'ng-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent  {
  calc: CalculatorService;

  input:string = '';
  result:string = '';

  constructor (calcService : CalculatorService){
    this.calc = calcService;
  }

 
  pressNum(num: string) {
    this.calc.press(num);
    this.result = this.calc.getResult();
  }
 
  pressOperator(op: string) {
    this.calc.press (op) ;
    this.result = this.calc.getResult();
  }

  getAnswer() {
    this.result = this.calc.getResult();
  }
  
  clear() {
    this.calc.press("C");
    this.result = this.calc.getResult();
  }
 
  allClear() {
    this.calc.press("C");
    this.result = this.calc.getResult();
  }
 
  calcAnswer() {
    this.calc.press("=");
    this.result = this.calc.getResult();
  }

}

