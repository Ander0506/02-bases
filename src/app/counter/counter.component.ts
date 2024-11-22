import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increasedrBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increasedrBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increasedrBy( value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }


}
