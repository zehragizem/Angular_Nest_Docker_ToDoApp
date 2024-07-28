import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'To-Do List';
  todos: Todo[] = [];
  newTodo: Todo = { title: '', completed: false };

  addTodo() {
    if (this.newTodo.title.trim()) {
      this.todos.push({ ...this.newTodo });
      this.newTodo = { title: '', completed: false }; // Reset the form
    }
  }

  updateTodoTitle(index: number) {
    const title = prompt('Düzenleme ekranı:', this.todos[index].title);
    if (title) {
      this.todos[index].title = title;
    }
  }

  toggleTodoCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(index: number) {
   if(confirm("Silmek istediğinize emin misiniz?")){
    this.todos.splice(index, 1);
   }
    
    
  }
}
