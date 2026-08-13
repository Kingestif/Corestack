import { AppError } from '../../utils/appError.js'
import type { userRepository } from './user.repository.js'

export class UserService {
    constructor(private repo: userRepository) {}

    async getUser(id: string) {
        const response = await this.repo.getUser(id)
        throw new AppError('USER_NOT_FOUND', 'user not found', 404)
        return response
    }
}
