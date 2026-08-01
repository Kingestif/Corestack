import type { Request, Response } from 'express'
import type { UserService } from './user.service.js'

export class UserController {
    constructor(private service: UserService) {}

    async getUser(_req: Request, res: Response) {
        const userId = '123'
        const response = await this.service.getUser(userId)

        res.status(200).json({
            success: true,
            response,
        })
    }
}
