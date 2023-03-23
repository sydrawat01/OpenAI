import { Configuration, OpenAIApi } from 'openai'
import appConfig from '../configs/app.config'
import { ServiceUnavailableError } from './error.util'

const basePath = appConfig.ENDPOINT
const model = appConfig.MODEL

const azureOpenAiChatGPT = async (prompt) => {
  const configuration = new Configuration({
    basePath: basePath + model,
    apiKey: appConfig.API_KEY,
  })
  const openai = new OpenAIApi(configuration)
  try {
    const completion = await openai.createCompletion(
      {
        model,
        prompt,
        max_tokens: 1000,
        temperature: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        top_p: 0.5,
        best_of: 1,
        stop: null,
      },
      {
        headers: {
          'api-key': appConfig.API_KEY,
        },
        params: { 'api-version': appConfig.API_VERSION },
      }
    )
    return completion
  } catch (error) {
    throw new ServiceUnavailableError(error.message)
  }
}

export default azureOpenAiChatGPT
