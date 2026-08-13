import type { ErrorCode } from '../types/error-codes.js'

export class AppError extends Error {
    statusCode: number
    code: string

    constructor(code: ErrorCode, message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
        this.code = code
    }
}
