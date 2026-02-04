import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.gold-api.com/price/',
  timeout: 5000,
})
