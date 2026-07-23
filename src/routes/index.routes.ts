import express from "express"
import userRouter from "./user.routes.js"
import healthRouter from "./health.routes.js"

const router = express.Router()

router.get('/', (_req, res) => {
    res.json({ status: "Online", version: "1.0.0"})
})

router.use(healthRouter)
router.use('/user', userRouter)

export default router