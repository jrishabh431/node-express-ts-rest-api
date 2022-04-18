import express from 'express'
import config from 'config'
import connectDB from './utils/connect'
import log from './utils/logger'
import routes from './routes'
import deserializeUser from './middleware/deserializeUser'

const app = express()

app.use(express.json())

app.use(deserializeUser)

const PORT = config.get<number>('port')

app.listen(PORT, async () => {
    log.info(`App is running at PORT - ${PORT}`)
    await connectDB()
    routes(app)
})