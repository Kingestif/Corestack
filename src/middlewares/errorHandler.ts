import type { ErrorRequestHandler } from 'express'
import { AppError } from '../utils/errors/appError.js'
import z from 'zod'

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

    if (error instanceof z.ZodError) {
        return res.status(400).json({
            success: false,
            code: 'VALIDATION_ERROR',
            message: 'Invalid request data',
            details: error.issues,
        })
    }

    return res.status(500).json({
        success: false,
        code: 'INTERNAL_SERVER_ERROR',
        message,
    })
}
