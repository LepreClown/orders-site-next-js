import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.access_token)
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthResponse) => {
	localStorage.setItem('user', JSON.stringify(data))
}
