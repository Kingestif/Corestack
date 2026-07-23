import express from "express"
import morgan from "morgan"
import routes from "./routes/index.routes.js"

const app = express()

app.use(morgan("dev"))

app.use(routes)

export default app