import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { SystemService } from '@/services/system/system.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useAdminSystem = () => {
	const queryData = useQuery('list of system for create', () => SystemService.getAll(), {
		select: ({ data }) =>
			data.map(
				(system): IOption => ({
					label: system.system_name,
					value: system.id,
				}),
			),
		onError(error) {
			toastError(error, 'Ошибка при получение списка систем')
		},
	})

	return queryData
}
