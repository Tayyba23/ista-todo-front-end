import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private api: ApiService) { }

  addTodo(todo: Todo): Observable<Array<Todo>> {
    return this.api.createTodo(todo);
  }

   // Toggle complete
   toggleTodoComplete(todo: Todo) {
    console.log(todo.complete);
    return this.api.updateTodo(todo);
  }

   getAllTodo() {
    return this.api.getTodos();
  }

}
