import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman', 'Capitan America'];
  public heroeDeleted?: string;


  removeLastHeroe():void{
    this.heroeDeleted= this.heroesNames.pop();  //remueve el ultimo elemento de la lista
  }






}
