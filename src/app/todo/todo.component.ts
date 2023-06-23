import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService) { }

  ngOnInit(): void { 
      this.todoDataService.getAllTodo()
    .subscribe(
      (todos) => {
        this.todos = todos;
      }
    );
  }

  
  onAddTodo(todo) {
    console.log(todo);
     this.todoDataService
         .addTodo(todo)
         .subscribe(
           (newTodo) => {
             this.todos = newTodo;
           }
       );
  }

  onToggleTodoComplete(todo) {
   //toggle here only
   todo.complete = !todo.complete
   this.todoDataService.toggleTodoComplete(todo).subscribe();
  }

}
