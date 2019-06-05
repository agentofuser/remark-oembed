import axios from 'axios'

const OEMBED_PROVIDERS_URL = 'https://oembed.com/providers.json'

const fetchOembededProviders = async () => {
  const response = await axios.get(OEMBED_PROVIDERS_URL)
  return response.data
}

export default fetchOembededProviders
