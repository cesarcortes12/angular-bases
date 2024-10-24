import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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
