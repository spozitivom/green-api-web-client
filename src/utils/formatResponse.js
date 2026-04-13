import axios from 'axios'

export const formatJsonResponse = (data) => JSON.stringify(data, null, 2)

export const formatRequestError = (error) => {
  if (axios.isAxiosError(error)) {
    const apiMessage =
      typeof error.response?.data === 'string'
        ? error.response.data
        : error.response?.data
          ? formatJsonResponse(error.response.data)
          : null

    if (apiMessage) {
      return apiMessage
    }

    if (error.message) {
      return error.message
    }
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Request failed with an unknown error.'
}
