import express from 'express'
import morgan from 'morgan'
import userRoutes from './features/users/user.route.js'
import healthRoutes from './features/health/health.route.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { limiter } from './middlewares/rateLimiter.js'
import helmet from 'helmet'
import compression from 'compression'

const app = express()

app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(limiter)

app.use(healthRoutes)
app.use('/users', userRoutes)
app.use(errorHandler)

export default app
