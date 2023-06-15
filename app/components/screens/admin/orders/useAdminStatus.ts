import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { StatusService } from '@/services/status/status.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useAdminStatus = () => {
	const queryData = useQuery('list of status for create', () => StatusService.getAll(), {
		select: ({ data }) =>
			data.map(
				(status): IOption => ({
					label: status.status_name,
					value: status.id,
				}),
			),
		onError(error) {
			toastError(error, 'Ошибка при получение списка объектов')
		},
	})

	return queryData
}
