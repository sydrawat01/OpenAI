import logger from '../configs/logger.config'
import azureOpenAiChatGPT from '../utils/openai.util'

const question = async (req, res) => {
  const { protocol, method, hostname, originalUrl } = req
  const headers = { ...req.headers }
  const metaData = { protocol, method, hostname, originalUrl, headers }
  logger.info(
    `Requesting ${method} ${protocol}://${hostname}${originalUrl}`,
    metaData
  )

  const { prompt } = req.body
  try {
    if (prompt === null) {
      throw new Error('Uh oh, no prompt was provided!')
    }

    const response = await azureOpenAiChatGPT(prompt)
    const answer = response.data.choices[0].text

    return res.status(200).json({
      success: true,
      message: answer,
    })
  } catch (error) {
    console.log(error)
    // logger.error(error)
  }
}

export { question }
