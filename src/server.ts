import * as dotenv from 'dotenv'
import app from './app.js'

dotenv.config()

const port = process.env.PORT

app.listen(port, () => {
    console.log('Server started listening')
})
