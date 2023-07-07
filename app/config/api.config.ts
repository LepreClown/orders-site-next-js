export const API_URL = `${process.env.APP_URL}`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/user${string}`
export const getRolesUrl = (string: string) => `/role/${string}`
export const getStatusesUrl = (string: string) => `/status/${string}`
export const getImportantsUrl = (string: string) => `/important/${string}`
export const getBuildingsUrl = (string: string) => `/building/${string}`
export const getSystemsUrl = (string: string) => `/system/${string}`
export const getOrdersUrl = (string: string) => `/order/${string}`

// api на сервак и используеются только в services
// url используется для переадресации пользователя по ссылке
