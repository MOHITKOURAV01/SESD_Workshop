import { Router } from 'express'
import { TodoController } from '../controllers/todo.controller'
import { Routes } from '../interfaces/routes.interface'

export class TodoRoute implements Routes {
    public path = '/'
    public router = Router()
    public todoController = new TodoController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.todoController.getTodos)
        this.router.get(`${this.path}:id`, this.todoController.getTodoById)
        this.router.post(`${this.path}`, this.todoController.create)
        this.router.put(`${this.path}:id`, this.todoController.updateTodo)
        this.router.delete(`${this.path}:id`, this.todoController.deleteTodo)
    }
}
