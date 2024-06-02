import { vi, expect, describe, it } from 'vitest'
import { useApi } from '../useApi'
import axios from 'axios'
import { date as mockData } from '../../../mockData/data'
import apiClient from '../../api'

describe('useApi', () => {
  it('should return data', async () => {
    const { data, fetch } = useApi()

    expect(data.value).toBe(null)

    apiClient.get = vi.fn().mockResolvedValueOnce({ data: mockData })

    await fetch('test-url')

    expect(data.value).toStrictEqual(mockData)
  })

  it('should set error and data when fetch fails', async () => {
    const { data, error, fetch } = useApi()

    const mockError = new axios.AxiosError('Request failed')
    apiClient.get = vi.fn().mockRejectedValueOnce(mockError)

    await fetch('test-url')

    expect(error.value).toStrictEqual({
      name: mockError.name,
      message: mockError.message,
      stack: mockError.stack
    })
    expect(data.value).toStrictEqual(mockData)
  })
})
