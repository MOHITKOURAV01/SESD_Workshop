import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model'
import { UserRepository } from '../repositories/user.repository'
import { HttpException } from '../utils/http.exception'
import { DataStoredInToken, TokenData } from '../interfaces/auth.interface'

export class AuthService {
    public userRepository = new UserRepository()

    public async signup(userData: Partial<User>): Promise<User> {
        const findUser = await this.userRepository.findByEmail(userData.email!)
        if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`)

        const hashedPassword = await bcrypt.hash(userData.password!, 10)
        const createUserData: User = await this.userRepository.create({ ...userData, password: hashedPassword })

        return createUserData
    }

    public async login(userData: Partial<User>): Promise<{ cookie: string, findUser: User, tokenData: TokenData }> {
        const findUser = await this.userRepository.findByEmail(userData.email!)
        if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`)

        const isPasswordMatching: boolean = await bcrypt.compare(userData.password!, findUser.password)
        if (!isPasswordMatching) throw new HttpException(409, "Password is not matching")

        const tokenData = this.createToken(findUser)
        const cookie = this.createCookie(tokenData)

        return { cookie, findUser, tokenData }
    }

    public createToken(user: User): TokenData {
        const dataStoredInToken: DataStoredInToken = { _id: (user._id as unknown) as string }
        const secretKey: string = process.env.SECRET_KEY || 'secretKey'
        const expiresIn: number = 60 * 60

        return { expiresIn, token: jwt.sign(dataStoredInToken, secretKey, { expiresIn }) }
    }

    public createCookie(tokenData: TokenData): string {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`
    }
}
