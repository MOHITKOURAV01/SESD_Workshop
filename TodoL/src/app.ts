import express from 'express'
import mongoose from 'mongoose'
import { Routes } from './interfaces/routes.interface'

export class App {
  public app: express.Application
  public port: string | number

  constructor(routes: Routes[]) {
    this.app = express()
    this.port = process.env.PORT || 4000

    this.connectToDatabase()
    this.initializeMiddlewares()
    this.initializeRoutes(routes)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }

  private async connectToDatabase() {
    try {
      let dbUrl = process.env.MONGO_URI

      if (!dbUrl) {
        const { MongoMemoryServer } = require('mongodb-memory-server')
        const mongod = await MongoMemoryServer.create()
        dbUrl = mongod.getUri()
      }

      await mongoose.connect(dbUrl as string)
      console.log("Database Connected")
    } catch (error) {
      console.log("Database Connection Failed", error)
    }
  }

  private initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router)
    })
  }
}
