import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  public createTodo(todo: Todo): Observable<Array<Todo>> {
    return this.http.post<Array<Todo>>(API_URL + '/ista/tasks',todo);
  }
  
  public updateTodo(todo: Todo): Observable<Array<Todo>> {
    return this.http.put<Array<Todo>>(API_URL + '/ista/tasks',todo);
  }

  public getTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(API_URL + '/ista/tasks');
  }

}
