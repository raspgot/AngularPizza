import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  pizzaNumber = 0;
  @Output() augmente = new EventEmitter();
  @Output() diminue = new EventEmitter();

  onChangeMinus () {
    if (this.pizzaNumber != 0) {
      this.pizzaNumber--;
      this.diminue.emit(-1);
    }
  }

  onChangePlus () {
    this.pizzaNumber++;
    this.augmente.emit(1);
  }
}