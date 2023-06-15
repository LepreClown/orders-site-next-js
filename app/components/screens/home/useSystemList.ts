import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { SystemService } from '@/services/system/system.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useSystemList = () => {
	const queryData = useQuery('list of system home create', () => SystemService.getAll(), {
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
