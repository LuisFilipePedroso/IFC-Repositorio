// Imports
import axios from 'axios'

// IFC API
export const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})
