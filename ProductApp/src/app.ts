import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { Routes } from './interfaces/routes.interface'
import { ErrorMiddleware } from './middlewares/error.middleware'
import { dbConnection } from './utils/database'

export class App {
    public app: express.Application
    public port: string | number

    constructor(routes: Routes[]) {
        this.app = express()
        this.port = process.env.PORT || 3000

        this.connectToDatabase()
        this.initializeMiddlewares()
        this.initializeRoutes(routes)
        this.initializeErrorHandling()
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`=================================`)
            console.log(`App listening on the port ${this.port}`)
            console.log(`=================================`)
        })
    }

    public getServer() {
        return this.app
    }

    private connectToDatabase() {
        dbConnection()
    }

    private initializeMiddlewares() {
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router)
        })
    }

    private initializeErrorHandling() {
        this.app.use(ErrorMiddleware)
    }
}
