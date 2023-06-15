import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IImportantEditInput } from '@/screens/admin/important/important-edit-interface'

import { ImportantService } from '@/services/important/important.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '../../../../config/url.config'

export const useImportantEdit = (setValue: UseFormSetValue<IImportantEditInput>) => {
	const { push, query } = useRouter()

	const importantId = Number(query.id)

	const { isLoading } = useQuery(
		['important', importantId],
		() => ImportantService.getById(importantId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Ошибка при получение срочности')
			},
			enabled: !!query.id,
		},
	)

	const { mutateAsync } = useMutation(
		'update important',
		(data: IImportantEditInput) =>
			ImportantService.update(importantId, {
				important_name: data.important_name,
			}),
		{
			onSuccess: () => {
				toastr.success('Обновление срочности', 'Срочность была успешно обновлена')
				push(getAdminUrl('importants'))
			},
			onError(error) {
				toastError(error, 'Ошибка при обновление срочности')
			},
		},
	)

	const onSubmit: SubmitHandler<IImportantEditInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
