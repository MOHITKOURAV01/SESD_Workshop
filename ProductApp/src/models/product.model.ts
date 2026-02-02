import { Schema, model, Document } from 'mongoose'

export interface Product extends Document {
    name: string
    description: string
    price: number
    category: string
    stock: number
    sku: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

const productSchema = new Schema<Product>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        category: {
            type: String,
            required: true,
            index: true
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        },
        sku: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
)

productSchema.index({ name: 'text', description: 'text', sku: 'text' })

export const ProductModel = model<Product>('Product', productSchema)
