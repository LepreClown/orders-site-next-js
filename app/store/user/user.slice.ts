import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocal } from '@/utils/local-storage'

import { login, logout } from '@/store/user/user.actions'

const initialState: any = {
	user: getStoreLocal('user'),
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
	},
})

export default userSlice.reducer
