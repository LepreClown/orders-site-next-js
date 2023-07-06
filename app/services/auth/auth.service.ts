import axios from 'api/interceptors'
import axios2 from 'axios'
import Cookies from 'js-cookie'

import { IAuthResponse } from '@/store/user/user.interface'

import { getContentType } from '../../api/api.helpers'
import { API_URL, getAuthUrl } from '../../config/api.config'

import {
	removeTokensStorage,
	saveAccessToken,
	saveToStorage,
	saveTokensStorage,
} from './auth.helper'

export const AuthService = {
	async login(telephone: string, password: string) {
		const response = await axios2.post<IAuthResponse>(`${API_URL}${getAuthUrl('/login')}`, {
			telephone,
			password,
		})
		const token = response.data.access_token
		if (token) saveTokensStorage(response.data)

		const user = await axios.post(
			`${API_URL}${getAuthUrl('/user_data_by_token')}`,
			{},
			{
				headers: {
					token,
				},
			},
		)
		if (user) saveToStorage(user.data)

		return { data: { response, user } }
	},

	async logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	// refresh долго
	// 	access быстро
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios2.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/refresh')}`,
			{
				scheme: 'bearer',
				credentials: refreshToken,
			},
			{
				headers: getContentType(),
			},
		)
		const token = response.data.access_token
		if (token) saveAccessToken(response.data)

		return response
	},
}
