import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { errorCatch } from '../../api/api.helpers'

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ telephone, password }, thunkAPI) => {
		try {
			const { data } = await AuthService.login(telephone, password)
			toastr.success('Вход', 'Вход успешен')
			return data.user.data
		} catch (error) {
			toastError(error, 'Неверный норер телефона или пароль')
			return thunkAPI.rejectWithValue(error)
		}
	},
)

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkAPI) => {
	try {
		const response = await AuthService.getNewTokens()
		return response.data
	} catch (error) {
		if (errorCatch(error) === 'jwt expired') {
			toastr.error('Выход', 'Ваша сессия истекла, пожалуйста, войдите снова')
			thunkAPI.dispatch(logout())
		}
		return thunkAPI.rejectWithValue(error)
	}
})

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})
