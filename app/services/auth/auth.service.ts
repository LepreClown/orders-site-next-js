import axios from 'api/interceptors'
import axios2 from 'axios'

import { IAuthResponse } from '@/store/user/user.interface'

import { API_URL, getAuthUrl } from '../../config/api.config'

import { removeTokensStorage, saveToStorage, saveTokensStorage } from './auth.helper'

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
}
