import { Todo, TodoModel } from '../models/todo.model'

export class TodoRepository {
    public async create(todoData: Partial<Todo>): Promise<Todo> {
        const todo = new TodoModel(todoData)
        return await todo.save()
    }

    public async findAll(): Promise<Todo[]> {
        return await TodoModel.find()
    }

    public async findById(id: string): Promise<Todo | null> {
        return await TodoModel.findById(id)
    }

    public async update(id: string, todoData: Partial<Todo>): Promise<Todo | null> {
        return await TodoModel.findByIdAndUpdate(id, todoData, { new: true })
    }

    public async delete(id: string): Promise<Todo | null> {
        return await TodoModel.findByIdAndDelete(id)
    }
}
