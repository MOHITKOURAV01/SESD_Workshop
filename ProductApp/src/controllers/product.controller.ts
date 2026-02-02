import { NextFunction, Request, Response } from 'express'
import { Product } from '../models/product.model'
import { ProductService } from '../services/product.service'

export class ProductController {
    public productService = new ProductService()

    public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const productData: Product = req.body
            const createProductData: Product = await this.productService.createProduct(productData)

            res.status(201).json({
                success: true,
                message: 'Product created successfully',
                data: createProductData
            })
        } catch (error) {
            next(error)
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { data, meta } = await this.productService.getAllProducts(req.query)

            res.status(200).json({
                success: true,
                message: 'Products retrieved successfully',
                data: data,
                meta: meta
            })
        } catch (error) {
            next(error)
        }
    }

    public getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const productId = req.params.id
            const product = await this.productService.getProductById(productId)

            res.status(200).json({
                success: true,
                message: 'Product found',
                data: product
            })
        } catch (error) {
            next(error)
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const productId = req.params.id
            const productData: Partial<Product> = req.body
            const updatedProduct = await this.productService.updateProduct(productId, productData)

            res.status(200).json({
                success: true,
                message: 'Product updated successfully',
                data: updatedProduct
            })
        } catch (error) {
            next(error)
        }
    }

    public delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const productId = req.params.id
            const deletedProduct = await this.productService.deleteProduct(productId)

            res.status(200).json({
                success: true,
                message: 'Product deleted successfully',
                data: deletedProduct
            })
        } catch (error) {
            next(error)
        }
    }
}
