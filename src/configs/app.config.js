import 'dotenv/config'

const { ENDPOINT, MODEL, API_KEY, API_VERSION } = process.env
const appConfig = {
  ENDPOINT,
  MODEL,
  API_KEY,
  API_VERSION,
}

export default appConfig
