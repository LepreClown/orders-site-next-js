import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IStatusEditInput } from '@/screens/admin/status/status-edit-interface'

import { StatusService } from '@/services/status/status.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '../../../../config/url.config'

export const useStatusEdit = (setValue: UseFormSetValue<IStatusEditInput>) => {
	const { push, query } = useRouter()

	const statusId = Number(query.id)

	const { isLoading } = useQuery(['status', statusId], () => StatusService.getById(statusId), {
		onSuccess: ({ data }) => {
			getKeys(data).forEach((key) => {
				setValue(key, data[key])
			})
		},
		onError: (error) => {
			toastError(error, 'Ошибка при получение статуса')
		},
		enabled: !!query.id,
	})

	const { mutateAsync } = useMutation(
		'update status',
		(data: IStatusEditInput) =>
			StatusService.update(statusId, {
				status_name: data.status_name,
			}),
		{
			onSuccess: () => {
				toastr.success('Обновление статуса', 'Статус был успешно обновлен')
				push(getAdminUrl('statuses'))
			},
			onError(error) {
				toastError(error, 'Ошибка при обновление статуса')
			},
		},
	)

	const onSubmit: SubmitHandler<IStatusEditInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
