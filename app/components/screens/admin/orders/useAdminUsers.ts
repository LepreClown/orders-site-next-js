import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useAdminUsers = () => {
	const queryData = useQuery('list of users for create', () => UserService.getAll(), {
		select: ({ data }) =>
			data.users.map(
				(user): IOption => ({
					label: `${user.name} ${user.surname}`,
					value: user.id,
				}),
			),
		onError(error) {
			toastError(error, 'Ошибка при получение списка пользователей')
		},
	})

	return queryData
}
