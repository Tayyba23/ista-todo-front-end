import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  todos: Todo[] = [];
  
  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }
}
