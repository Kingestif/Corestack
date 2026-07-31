import express from "express"
import { userController } from "./index.js"

const router = express.Router()

router.get('/:id', userController.getUser.bind(userController))

export default router