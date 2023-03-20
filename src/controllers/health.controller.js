import logger from '../configs/logger.config'

const health = (req, res) => {
  const { protocol, method, hostname, originalUrl } = req
  const headers = { ...req.headers }
  const metaData = { protocol, method, hostname, originalUrl, headers }
  logger.info(
    `Requesting ${method} ${protocol}://${hostname}${originalUrl}`,
    metaData
  )
  res.sendStatus(200)
}

export { health }
