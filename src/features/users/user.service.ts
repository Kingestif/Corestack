import { AppError } from '../../utils/errors/appError.js'
import type { userRepository } from './user.repository.js'

export class UserService {
    constructor(private repo: userRepository) {}

    async getUser(id: string) {
        const response = await this.repo.getUser(id)
        throw new AppError('NOT_FOUND', 'user not found', 404)
        return response
    }
}
