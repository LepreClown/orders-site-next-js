import { useQuery } from 'react-query'

import { IOptionForUser } from '@/ui/select/select.interface'

import { RoleService } from '@/services/role/role.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useAdminRole = () => {
	const admin = 'Администратор'
	const user = 'Пользователь'
	const advancedUser = 'Менеджер'

	const queryData = useQuery('list of roles for create', () => RoleService.getRoles(), {
		select: ({ data }) =>
			data?.roles?.map(
				(role, index): IOptionForUser => ({
					label: role === 'admin' ? admin : role === 'user' ? user : advancedUser,
					value: role,
				}),
			),
		onError(error) {
			toastError(error, 'Ошибка при получение списка ролей')
		},
	})

	return queryData
}
