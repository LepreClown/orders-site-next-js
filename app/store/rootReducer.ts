import { reducer as toastrReducer } from 'react-redux-toastr'

import { userSlice } from '@/store/user/user.slice'

export const reducers = {
	user: userSlice.reducer,
	toastr: toastrReducer,
}
