import axios from 'axios';
export default axios.create({
  baseURL: process.env.VITE_BASE_URL,
  headers: {
    'X-RapidAPI-Key': process.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.VITE_RAPID_HOST,
  },
});
