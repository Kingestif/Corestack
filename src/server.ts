import app from './app.js'
import { ENV } from './config/env.js'

const port = Number(ENV.PORT)

app.listen(port, () => {
    console.log('Server started listening')
})
