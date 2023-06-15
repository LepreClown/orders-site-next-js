import axios from 'axios'
import Cookies from 'js-cookie'

import { API_SERVER_URL, API_URL } from '../config/api.config'
import { IS_PRODUCTION } from '../config/constants'

import { getContentType } from './api.helpers'

const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')
	if (accessToken && config.headers) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

// instance.interceptors.response.use(
// 	(config) => config,
// 	async (error) => {
// 		const originalRequest = error.config
//
// 		// if (
// 		// 	(error.response.status === 401 ||
// 		// 		errorCatch(error) === 'jwt expired' ||
// 		// 		errorCatch(error) === 'jwt must be provided') &&
// 		// 	error.config &&
// 		// 	!error.config._isRetry
// 		// ) {
// 		// 	originalRequest._isRetry = true
// 		// 	try {
// 		// 		await AuthService.getNewTokens()
// 		//
// 		// 		return instance.request(originalRequest)
// 		// 	} catch (e) {
// 		// 		if (errorCatch(e) === 'jwt expired') removeTokensStorage()
// 		// 	}
// 		// }
// 		// throw error
// 	},
// )

export default instance

export const axiosClassic = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType(),
})
