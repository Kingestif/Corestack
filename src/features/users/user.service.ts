import { AppError } from '../../utils/appError.js'
import type { userRepository } from './user.repository.js'

export class UserService {
    constructor(private repo: userRepository) {}

    async getUser(id: string) {
        const response = await this.repo.getUser(id)
        throw new AppError(404, 'USER_NOT_FOUND', 'user not found')
        return response
    }
}
