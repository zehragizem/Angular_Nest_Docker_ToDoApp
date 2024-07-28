import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ToDoService } from "./todo.service";

@Controller('todo')
export class ToDoController {
    constructor(private readonly todoService: ToDoService) {}

    @Post()
    addToDo(
        @Body('title') todoTitle: string
    ) {
        const generatedId = this.todoService.addToDo(todoTitle);
        return { id: generatedId };
    }

    @Get()
    getAllToDo() {
        return this.todoService.getToDo();
    }

    @Get(':id')
    getToDo(@Param('id') todoId: string) {
        return this.todoService.getSingleToDo(todoId);
    }

    @Patch(':id')
    updateToDo(
        @Param('id') todoId: string,
        @Body('title') todoTitle: string,
        @Body('completed') completed: boolean
    ) {
        this.todoService.updateToDo(todoId, todoTitle, completed);
    }

    @Delete(':id')
    removeToDo(@Param('id') todoId: string) {
        this.todoService.deleteToDo(todoId);
        return null;
    }
}
