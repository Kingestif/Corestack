import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()

const envSchema = z.object({
    PORT: z.string(),
})

type Env = z.infer<typeof envSchema>

export const ENV: Env = envSchema.parse(process.env)
