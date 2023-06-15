export const API_URL = `${process.env.APP_URL}`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/user${string}`
