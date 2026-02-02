import { Product } from '../models/product.model'
import { ProductRepository } from '../repositories/product.repository'
import { HttpException } from '../utils/http.exception'

export class ProductService {
    public productRepository = new ProductRepository()

    public async createProduct(productData: Product): Promise<Product> {
        const existingProduct = await this.productRepository.findBySku(productData.sku)
        if (existingProduct) {
            throw new HttpException(409, `Product with SKU ${productData.sku} already exists`)
        }

        return await this.productRepository.create(productData)
    }

    public async getAllProducts(query: any): Promise<{ data: Product[], meta: any }> {
        const page = Number(query.page) || 1
        const limit = Number(query.limit) || 10
        const skip = (page - 1) * limit

        const filter: any = {}
        if (query.search) {
            filter.$text = { $search: query.search }
        }
        if (query.category) {
            filter.category = query.category
        }
        if (query.minPrice || query.maxPrice) {
            filter.price = {}
            if (query.minPrice) filter.price.$gte = Number(query.minPrice)
            if (query.maxPrice) filter.price.$lte = Number(query.maxPrice)
        }

        let sort: any = { createdAt: -1 }
        if (query.sortBy) {
            const [field, order] = query.sortBy.split(':')
            sort = { [field]: order === 'desc' ? -1 : 1 }
        }

        const { products, total } = await this.productRepository.findAll(filter, limit, skip, sort)

        return {
            data: products,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        }
    }

    public async getProductById(productId: string): Promise<Product> {
        const product = await this.productRepository.findById(productId)
        if (!product) throw new HttpException(404, 'Product not found')
        return product
    }

    public async updateProduct(productId: string, productData: Partial<Product>): Promise<Product> {
        const product = await this.productRepository.update(productId, productData)
        if (!product) throw new HttpException(404, 'Product not found')
        return product
    }

    public async deleteProduct(productId: string): Promise<Product> {
        const product = await this.productRepository.delete(productId)
        if (!product) throw new HttpException(404, 'Product not found')
        return product
    }
}
