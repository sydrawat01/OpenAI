import logger from '../configs/logger.config'
import azureOpenAiChatGPT from '../utils/openai.util'
import { BadRequestError } from '../utils/error.util'

const question = async (req, res, next) => {
  const { protocol, method, hostname, originalUrl } = req
  const headers = { ...req.headers }
  const metaData = { protocol, method, hostname, originalUrl, headers }
  logger.info(
    `Requesting ${method} ${protocol}://${hostname}${originalUrl}`,
    metaData
  )

  const { prompt } = req.query
  try {
    if (!prompt || prompt === null) {
      const message =
        'The request must be of the format http://thewebsite.com/ask?prompt=your question here'
      throw new BadRequestError(message)
    }

    const response = await azureOpenAiChatGPT(prompt)
    const answer = response.data.choices[0].text

    return res.status(200).json({
      message: answer,
    })
  } catch (error) {
    next(error)
  }
}

export { question }
