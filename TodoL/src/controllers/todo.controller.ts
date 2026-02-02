import { NextFunction, Request, Response } from 'express'
import { Todo } from '../models/todo.model'
import { TodoService } from '../services/todo.service'

export class TodoController {
    public todoService = new TodoService()

    public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const todoData: Todo = req.body
            const createTodoData: Todo = await this.todoService.createTodo(todoData)
            res.status(201).json({ data: createTodoData, message: 'created' })
        } catch (error) {
            next(error)
        }
    }

    public getTodos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const findAllTodosData: Todo[] = await this.todoService.getAllTodos()
            res.status(200).json({ data: findAllTodosData, message: 'findAll' })
        } catch (error) {
            next(error)
        }
    }

    public getTodoById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const todoId = req.params.id
            const findOneTodoData: Todo = await this.todoService.getTodoById(todoId)
            res.status(200).json({ data: findOneTodoData, message: 'findOne' })
        } catch (error) {
            next(error)
        }
    }

    public updateTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const todoId = req.params.id
            const todoData: Partial<Todo> = req.body
            const updateTodoData: Todo = await this.todoService.updateTodo(todoId, todoData)
            res.status(200).json({ data: updateTodoData, message: 'updated' })
        } catch (error) {
            next(error)
        }
    }

    public deleteTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const todoId = req.params.id
            const deleteTodoData: Todo = await this.todoService.deleteTodo(todoId)
            res.status(200).json({ data: deleteTodoData, message: 'deleted' })
        } catch (error) {
            next(error)
        }
    }
}
