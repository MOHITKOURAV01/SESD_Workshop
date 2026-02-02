import { NextFunction, Request, Response } from 'express'
import { User } from '../models/user.model'
import { AuthService } from '../services/auth.service'

export class AuthController {
    public authService = new AuthService()

    public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userData: User = req.body
            const signUpUserData: User = await this.authService.signup(userData)
            res.status(201).json({ data: signUpUserData, message: 'signup' })
        } catch (error) {
            next(error)
        }
    }

    public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userData: User = req.body
            const { cookie, findUser, tokenData } = await this.authService.login(userData)
            res.setHeader('Set-Cookie', [cookie])
            res.status(200).json({ data: findUser, token: tokenData.token, message: 'login' })
        } catch (error) {
            next(error)
        }
    }
}
