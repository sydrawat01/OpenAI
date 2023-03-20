import 'dotenv/config'

const { ENDPOINT, MODEL, API_KEY, API_VERSION, HOSTNAME, PORT, ENVIRONMENT } =
  process.env
const appConfig = {
  ENDPOINT,
  MODEL,
  API_KEY,
  API_VERSION,
  HOSTNAME,
  PORT,
  ENVIRONMENT,
}

export default appConfig
