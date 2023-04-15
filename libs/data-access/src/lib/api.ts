import axios from 'axios';

const keys = (import.meta as unknown as { env: Record<string, string> }).env;
export default axios.create({
  baseURL: 'https://weatherapi-com.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': keys.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': keys.VITE_RAPID_HOST,
  },
});
