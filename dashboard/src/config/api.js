// Imports
import axios from 'axios'

// IFC API
export const api = axios.create({
  // baseURL: 'https://5a77ccfd-dbb8-402e-a1f9-56a147affcd4.mock.pstmn.io',
  baseURL: 'http://localhost:3333',
  headers: {}
})
