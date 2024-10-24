import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  decreaseBy(number: number) {
    this.counter -= 1;
}
  public title: string = 'mi primera app';
  public counter: number = 10;

  increaseBy(number: number):void{
    this.counter += 1;
  }
  reset():void{
    this.counter = 10
  }
}
