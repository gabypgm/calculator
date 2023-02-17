import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {

  constructor() {}

  total: string = '';
  firstValue: number | string = 0;
  secondValue: number | string = 0;
  operator: string =''; 
  result: number = 0;
  
  reset(){
    this.firstValue = 0;
    this.secondValue = 0;
    this.total = '';
    this.operator=''
    this.result = 0
  }

  operation(op: string){
    this.operator = op
    this.total = this.firstValue.toString() + " " + op + " " + this.secondValue.toString()
    this.result = eval(this.total)
  }

  startTyping() {
    this.firstValue = this.firstValue == 0 ? '' : this.firstValue
    this.secondValue  = this.secondValue == 0 ? '' : this.secondValue
  }
}


