import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://cetrix13.github.io'
})

export default apiClient
