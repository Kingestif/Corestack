import express from 'express'
import morgan from 'morgan'
import userRoutes from './features/users/user.route.js'
import healthRoutes from './features/health/health.route.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { limiter } from './middlewares/rateLimiter.js'

const app = express()

app.use(morgan('dev'))
app.use(limiter)

app.use(healthRoutes)
app.use('/users', userRoutes)
app.use(errorHandler)

export default app
