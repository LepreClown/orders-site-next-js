import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocal } from '@/utils/local-storage'

import { checkAuth, login, logout } from '@/store/user/user.actions'

const initialState: any = {
	user: getStoreLocal('user'),
	token: {},
	status: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		/*Login*/
		builder
			.addCase(login.pending, (state) => {
				state.status = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = false
				state.user = action.payload
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
			state.token = action.payload
		})
	},
})

export default userSlice.reducer
