import axios from 'axios'
import { formatRequestError } from '../utils/formatResponse'

const DEFAULT_BASE_URL =
  import.meta.env.VITE_GREEN_API_URL || 'https://api.green-api.com'

const greenApiClient = axios.create({
  baseURL: DEFAULT_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
})

export const buildApiUrl = (methodName, idInstance, apiTokenInstance) =>
  `/waInstance${idInstance}/${methodName}/${apiTokenInstance}`

const request = async ({
  method = 'get',
  methodName,
  idInstance,
  apiTokenInstance,
  data,
}) => {
  try {
    const response = await greenApiClient.request({
      method,
      url: buildApiUrl(methodName, idInstance, apiTokenInstance),
      data,
    })

    return response.data
  } catch (error) {
    throw new Error(formatRequestError(error))
  }
}

export const getSettings = (idInstance, apiTokenInstance) =>
  request({
    methodName: 'getSettings',
    idInstance,
    apiTokenInstance,
  })

export const getStateInstance = (idInstance, apiTokenInstance) =>
  request({
    methodName: 'getStateInstance',
    idInstance,
    apiTokenInstance,
  })

export const sendMessage = (idInstance, apiTokenInstance, payload) =>
  request({
    method: 'post',
    methodName: 'sendMessage',
    idInstance,
    apiTokenInstance,
    data: payload,
  })

export const sendFileByUrl = (idInstance, apiTokenInstance, payload) =>
  request({
    method: 'post',
    methodName: 'sendFileByUrl',
    idInstance,
    apiTokenInstance,
    data: payload,
  })
