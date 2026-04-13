import axios from 'axios'

export const formatRequestError = (error) => {
  if (axios.isAxiosError(error)) {
    const apiMessage =
      typeof error.response?.data === 'string'
        ? error.response.data
        : error.response?.data
          ? JSON.stringify(error.response.data, null, 2)
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
