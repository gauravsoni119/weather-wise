import axios from 'axios';
import ENV_KEYS from '../constant';
export default axios.create({
  baseURL:
    ENV_KEYS.VITE_USE_MOCK === 'true'
      ? 'http://localhost:3000'
      : `https://${ENV_KEYS.VITE_RAPID_HOST}`,
  headers: {
    'X-RapidAPI-Key': ENV_KEYS.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': ENV_KEYS.VITE_RAPID_HOST,
  },
});
