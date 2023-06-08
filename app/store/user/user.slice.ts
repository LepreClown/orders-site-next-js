import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocal } from '@/utils/local-storage'

import { IInitialState } from '@/store/user/user.interface'

import { checkAuth, login, logout, register } from './user.actions'

const initialState: IInitialState = {
	user: getStoreLocal('user'),
	status: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		/*Register*/
		builder
			.addCase(register.pending, (state) => {
				state.status = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.status = false
				state.user = action.payload.user
			})
			.addCase(register.rejected, (state) => {
				state.status = false
				state.user = null
			})
		/*Login*/
		builder
			.addCase(login.pending, (state) => {
				state.status = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = false
				state.user = action.payload.user
			})
			.addCase(login.rejected, (state) => {
				state.status = false
				state.user = null
			})
		/*Logout*/
		builder.addCase(logout.fulfilled, (state) => {
			state.status = false
			state.user = null
		})
		/*CheckAuth*/
		builder.addCase(checkAuth.fulfilled, (state, action) => {
			state.user = action.payload.user
		})
	},
})

export default userSlice.reducer
