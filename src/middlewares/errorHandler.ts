import type { ErrorRequestHandler } from 'express'
import { AppError } from '../utils/appError.js'

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
    let message = 'Internal server error'
    if (error instanceof AppError) {
        message = error.message
        return res.status(error.statusCode).json({
            success: false,
            code: error.code,
            message,
        })
    }
    return res.status(500).json({
        success: false,
        code: 'INTERNAL_SERVER_ERROR',
        message,
    })
}
