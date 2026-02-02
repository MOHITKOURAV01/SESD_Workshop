import { FilterQuery, SortOrder } from 'mongoose'
import { Product, ProductModel } from '../models/product.model'

export class ProductRepository {
    public async create(productData: Partial<Product>): Promise<Product> {
        const product = new ProductModel(productData)
        return await product.save()
    }

    public async findAll(
        filter: FilterQuery<Product> = {},
        limit: number = 10,
        skip: number = 0,
        sort: string | { [key: string]: SortOrder } = { createdAt: -1 }
    ): Promise<{ products: Product[], total: number }> {
        const products = await ProductModel.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(limit)

        const total = await ProductModel.countDocuments(filter)

        return { products, total }
    }

    public async findById(id: string): Promise<Product | null> {
        return await ProductModel.findById(id)
    }

    public async update(id: string, productData: Partial<Product>): Promise<Product | null> {
        return await ProductModel.findByIdAndUpdate(id, productData, {
            new: true,
            runValidators: true
        })
    }

    public async delete(id: string): Promise<Product | null> {
        return await ProductModel.findByIdAndDelete(id)
    }

    public async findBySku(sku: string): Promise<Product | null> {
        return await ProductModel.findOne({ sku })
    }
}
