// Imports
import axios from 'axios'

// IFC API
const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {}
})

export default api
