import type { Server } from 'node:http'
import { logger } from '../logger/logger.js'

export const gracefulShutdown = (server: Server, signal: string) => {
    logger.info(`Received ${signal}. Starting graceful shutdown...`)

    server.close(() => {
        logger.info('HTTP server closed')
        process.exit(0)
    })
}
