import { useQuery } from 'react-query'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useStatisticsUsers = () => {
	return useQuery(['user count'], () => UserService.getAll(), {
		select: ({ data }) => data.quantity_users,
		onError(error) {
			toastError(error, 'Список объектов')
		},
	})
}
