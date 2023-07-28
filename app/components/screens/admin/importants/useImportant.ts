import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IImportantCreate } from '@/screens/admin/importants/importants.interface'

import { ImportantService } from '@/services/important/important.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '../../../../config/url.config'

export const useImportant = () => {
	const { push } = useRouter()
	const [orderBy, setOrderBy] = useState('important_name')

	const queryData = useQuery(['important list', orderBy], () => ImportantService.getAll(orderBy), {
		select: ({ data }) =>
			data.map((important, index) => ({
				id: important.id,
				editUrl: getAdminUrl(`important/edit/${important.id}`),
				items: [String(index + 1), important.important_name],
			})),
		onError(error) {
			toastError(error, 'Список срочностей')
		},
	})
	const handleImportantOrderBy = (orderBy: string) => {
		setOrderBy(orderBy)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete important',
		(id: number) => ImportantService.delete(id),
		{
			onError(error) {
				toastError(error, 'Срочность не удален')
			},
			onSuccess({ data: id }) {
				toastr.success('Срочность', 'Срочность успешно удален')
				queryData.refetch()
			},
		},
	)

	const { mutateAsync: createAsync, status: createStatus } = useMutation(
		'create important',
		(data: IImportantCreate) =>
			ImportantService.create({
				important_name: data.important_name,
			}),
		{
			onError(error) {
				toastError(error, 'Важность не создан')
			},
			onSuccess({ data: id }) {
				toastr.success('Важность', 'Важность успешно создана')
				push(getAdminUrl('importants'))
			},
		},
	)
	const onSubmit: SubmitHandler<IImportantCreate> = async (data) => {
		await createAsync(data)
	}

	return useMemo(
		() => ({
			deleteAsync,
			createAsync,
			createStatus,
			handleImportantOrderBy,
			onSubmit,
			...queryData,
		}),
		[queryData, handleImportantOrderBy, createStatus, deleteAsync, createAsync],
	)
}
