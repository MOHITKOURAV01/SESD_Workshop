import { Schema, model, Document } from 'mongoose'

export interface User extends Document {
    email: string
    password: string
    name: string
}

const userSchema = new Schema<User>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
)

export const UserModel = model<User>('User', userSchema)
