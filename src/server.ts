import app from './app.js'
import { ENV } from './config/env.js'
import { logger } from './core/logger/logger.js'
import { gracefulShutdown } from './core/shutdown/gracefulShutdown.js'

const port = ENV.PORT

const server = app.listen(port, () => {
    logger.info('Server started listening')
})

process.on('SIGTERM', () => {
    gracefulShutdown(server, 'SIGTERM')
})

process.on('SIGINT', () => {
    gracefulShutdown(server, 'SIGINT')
})
