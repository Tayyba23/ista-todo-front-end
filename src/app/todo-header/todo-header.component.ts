import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }
}
