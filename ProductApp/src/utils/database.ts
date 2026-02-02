import { connect, set } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

export const dbConnection = async () => {
    const mongoServer = await MongoMemoryServer.create()
    const mongoUri = mongoServer.getUri()

    const dbConfig = {
        url: process.env.MONGO_URI || mongoUri,
        options: {
            autoIndex: true,
        },
    }

    if (process.env.NODE_ENV !== 'production') {
        set('debug', true)
    }

    try {
        await connect(dbConfig.url)
        console.log(`=================================`)
        console.log(`Connected to MongoDB Database!`)
        console.log(`=================================`)
    } catch (error) {
        console.error('Database Connection Error:', error)
    }
}
