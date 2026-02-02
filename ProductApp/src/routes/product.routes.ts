import { Router } from 'express'
import { ProductController } from '../controllers/product.controller'
import { Routes } from '../interfaces/routes.interface'

export class ProductRoute implements Routes {
    public path = '/products'
    public router = Router()
    public productController = new ProductController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, this.productController.create)
        this.router.get(`${this.path}`, this.productController.getAll)
        this.router.get(`${this.path}/:id`, this.productController.getById)
        this.router.put(`${this.path}/:id`, this.productController.update)
        this.router.delete(`${this.path}/:id`, this.productController.delete)
    }
}
