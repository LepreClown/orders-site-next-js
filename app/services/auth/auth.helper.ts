import Cookies from 'js-cookie'

import { IAccessToken, IAuthResponse, ITokens } from '@/store/user/user.interface'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.access_token)
	Cookies.set('refreshToken', data.refresh_token)
}
export const saveAccessToken = (data: IAccessToken) => {
	Cookies.set('accessToken', data.access_token)
}
export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

export const saveToStorage = (data: IAuthResponse) => {
	localStorage.setItem('user', JSON.stringify(data))
}
