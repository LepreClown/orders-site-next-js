import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ISystemEditInput } from '@/screens/admin/system/system-edit-interface'

import { SystemService } from '@/services/system/system.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '../../../../config/url.config'

export const useSystemEdit = (setValue: UseFormSetValue<ISystemEditInput>) => {
	const { push, query } = useRouter()

	const systemId = Number(query.id)

	const { isLoading } = useQuery(['system', systemId], () => SystemService.getById(systemId), {
		onSuccess: ({ data }) => {
			getKeys(data).forEach((key) => {
				setValue(key, data[key])
			})
		},
		onError: (error) => {
			toastError(error, 'Ошибка при получение системы')
		},
		enabled: !!query.id,
	})

	const { mutateAsync } = useMutation(
		'update system',
		(data: ISystemEditInput) =>
			SystemService.update(systemId, {
				system_name: data.system_name,
			}),
		{
			onSuccess: () => {
				toastr.success('Обновление системы', 'Система была успешно обновлена')
				push(getAdminUrl('systems'))
			},
			onError(error) {
				toastError(error, 'Ошибка при обновление системы')
			},
		},
	)

	const onSubmit: SubmitHandler<ISystemEditInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
