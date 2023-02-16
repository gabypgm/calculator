import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  total: number = 0;

  @Input('event') event: number = 0;
  
  add(event: any) {
    console.log(this.total)
    return this.total = this.total + parseFloat(event.target.value);
  }
}


