import { Injectable } from '@angular/core';
import { OperationType } from './OperationType';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  display: string = "";
  lastArgument = 0;
  result = 0;
  newArgument = false;
  shouldReset = true;

  lastOperation: OperationType;

  constructor() { }

  press(key: string) {
    if (key === "C")
      this.display = "";
    else {
      if (key === "+") {
        this.lastOperation = OperationType.Plus;
        this.lastArgument = parseInt(this.display);
        this.newArgument = true;
      } else {
        if (key === "/") {
          this.lastOperation = OperationType.Div;
          this.lastArgument = parseInt(this.display);
          this.newArgument = true;
        }
        else if (key === "=") {
          var currentArgument = parseInt(this.display);
          if (this.lastOperation == OperationType.Plus) {
            this.display = (this.lastArgument + currentArgument).toString();
          }
          if (this.lastOperation == OperationType.Div && currentArgument == 0) {
            this.display = "Division By Zero Error";
          }
          this.shouldReset = true;
        }
        else {
          if (this.shouldReset) {
            this.display = "";
            this.shouldReset = false;
          }
          if (this.newArgument) {
            this.display = "";
            this.newArgument = false;
          }
          this.display += key;
        }
      }
    }

  }
  getResult(): string {
    if (this.display === "")
      return "0";
    if (this.display.length > 5)
      return "E";
    return this.display;
  }

}
