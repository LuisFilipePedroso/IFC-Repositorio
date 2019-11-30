// Imports
import axios from 'axios'

// IFBOX API
const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
