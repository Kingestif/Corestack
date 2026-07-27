import express from "express"
import morgan from "morgan"
import userRoutes from "./features/users/user.route.js"
import healthRoutes from "./features/health/health.route.js"

const app = express()

app.use(morgan("dev"))

app.use(healthRoutes)
app.use("/users", userRoutes)

export default app