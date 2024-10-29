import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todo: string[] = [];
  addToDo(todo : string) : void
  {
    if(todo.length <= 3)
    {
      alert('zadanie musi miec wiecej niz 3 znaki');
      return;
    }
    this.todo.push(todo); //dodaje na koniec listy
    console.log('aktualne lista',this.todo);
  }
}
