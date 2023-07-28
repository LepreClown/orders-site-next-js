import { useQuery } from 'react-query'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useFreshUsers = () => {
	return useQuery(['fresh users'], () => UserService.getFreshUsers(), {
		select: ({ data }) => data.users,
		onError(error) {
			toastError(error, 'Список объектов')
		},
	})
}
