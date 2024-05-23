import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'mock_url'
})

export default apiClient
