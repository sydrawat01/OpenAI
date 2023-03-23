import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import appConfig from './src/configs/app.config'
import logger from './src/configs/logger.config'
import { errorHandler } from './src/middlewares/errorHandler'
import { healthRoute, askRoute } from './src/routes/index.routes'

const app = express()
const { HOSTNAME, PORT, ENVIRONMENT } = appConfig
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', healthRoute, askRoute)
app.use(errorHandler)

app.listen(PORT, () => {
  if (ENVIRONMENT !== 'prod')
    logger.info(`Server running at http://${HOSTNAME}:${PORT}`)
})

export default app
