import { Todo } from '../models/todo.model'
import { TodoRepository } from '../repositories/todo.repository'

export class TodoService {
    public todoRepository = new TodoRepository()

    public async createTodo(todoData: Todo): Promise<Todo> {
        return await this.todoRepository.create(todoData)
    }

    public async getAllTodos(): Promise<Todo[]> {
        return await this.todoRepository.findAll()
    }

    public async getTodoById(todoId: string): Promise<Todo> {
        const todo = await this.todoRepository.findById(todoId)
        if (!todo) throw new Error('Todo not found')
        return todo
    }

    public async updateTodo(todoId: string, todoData: Partial<Todo>): Promise<Todo> {
        const todo = await this.todoRepository.update(todoId, todoData)
        if (!todo) throw new Error('Todo not found')
        return todo
    }

    public async deleteTodo(todoId: string): Promise<Todo> {
        const todo = await this.todoRepository.delete(todoId)
        if (!todo) throw new Error('Todo not found')
        return todo
    }
}
