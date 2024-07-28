import { Injectable, NotFoundException } from "@nestjs/common";
import { ToDo } from "./todo.model";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ToDoService {
    private todos: ToDo[] = [];

    addToDo(title: string): string {
        const todoId = uuidv4(); // Generate a unique ID with UUID
        const newToDo = new ToDo(todoId, title, false); // New to-dos are not completed by default
        this.todos.push(newToDo);
        return todoId;
    }

    getToDo() {
        return [...this.todos];
    }

    getSingleToDo(todoId: string) {
        const todo = this.findToDo(todoId)[0];
        return { ...todo };
    }

    updateToDo(todoId: string, title: string, completed: boolean) {
        const [todo, index] = this.findToDo(todoId);
        const updatedTodo = { ...todo };
        if (title !== undefined) {
            updatedTodo.title = title;
        }
        if (completed !== undefined) {
            updatedTodo.completed = completed;
        }
        this.todos[index] = updatedTodo;
    }

    deleteToDo(todoId: string) {
        const index = this.findToDo(todoId)[1];
        this.todos.splice(index, 1);
    }

    private findToDo(id: string): [ToDo, number] {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        const todo = this.todos[todoIndex];
        if (!todo) {
            throw new NotFoundException('To Do not found');
        }
        return [todo, todoIndex];
    }
}
