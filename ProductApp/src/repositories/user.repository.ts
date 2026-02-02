import { User, UserModel } from '../models/user.model'

export class UserRepository {
    public async create(userData: Partial<User>): Promise<User> {
        const user = new UserModel(userData)
        return await user.save()
    }

    public async findByEmail(email: string): Promise<User | null> {
        return await UserModel.findOne({ email })
    }

    public async findById(id: string): Promise<User | null> {
        return await UserModel.findById(id)
    }
}
