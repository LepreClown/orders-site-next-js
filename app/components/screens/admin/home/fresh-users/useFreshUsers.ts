import { useQuery } from 'react-query'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useFreshUsers = () => {
	return useQuery(['fresh users'], () => UserService.getAll(), {
		select: ({ data }) => data.users.slice(0, 4),
		onError(error) {
			toastError(error, 'Список объектов')
		},
	})
}
