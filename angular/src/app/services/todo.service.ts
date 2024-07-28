import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTodoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addTodo(title: string): Observable<any> {
    return this.http.post(this.apiUrl, { title });
  }

  updateTodo(id: string, title: string, completed: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { title, completed });
  }
}
