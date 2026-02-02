import { NextFunction, Request, Response } from 'express'
import { HttpException } from '../utils/http.exception'

export const ErrorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status: number = error.status || 500
    const message: string = error.message || 'Something went wrong'

    console.error(`[ERROR] ${status} - ${message}`)

    res.status(status).json({
        success: false,
        message,
        status
    })
}
