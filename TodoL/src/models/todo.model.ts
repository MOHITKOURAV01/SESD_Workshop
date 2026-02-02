import { Schema, model, Document } from 'mongoose'

export interface Todo extends Document {
    title: string
    isCompleted: boolean
}

const todoSchema = new Schema<Todo>(
    {
        title: {
            type: String,
            required: true
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

export const TodoModel = model<Todo>('Todo', todoSchema)
