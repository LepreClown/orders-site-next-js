import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { ImportantService } from '@/services/important/important.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useAdminImportant = () => {
	const queryData = useQuery('list of important', () => ImportantService.getAll(), {
		select: ({ data }) =>
			data.map(
				(important): IOption => ({
					label: important.important_name,
					value: important.id,
				}),
			),
		onError(error) {
			toastError(error, 'Ошибка при получение списка срочности')
		},
	})

	return queryData
}
