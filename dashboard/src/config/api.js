// Imports
import axios from 'axios'

// IFC API
export const api = axios.create({
  baseURL: 'https://3221a4ce-75e5-4b27-a281-7fbbbad6d466.mock.pstmn.io',
  headers: {
    'Content-Type': 'application/json'
  }
})
