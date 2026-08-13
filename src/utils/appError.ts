import type { ErrorCode } from '../types/error-codes.js'

export class AppError extends Error {
    statusCode: number
    code: string

    constructor(statusCode: number, code: ErrorCode, message: string) {
        super(message)
        this.statusCode = statusCode
        this.code = code
    }
}
