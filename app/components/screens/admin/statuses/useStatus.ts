import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IStatusCreate } from '@/screens/admin/statuses/statuses.interface'

import { StatusService } from '@/services/status/status.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '../../../../config/url.config'

export const useStatus = () => {
	const [orderBy, setOrderBy] = useState<string>('status_name')

	const { push } = useRouter()

	const queryData = useQuery(['status list', orderBy], () => StatusService.getAll(orderBy), {
		select: ({ data }) =>
			data.map((status, index) => ({
				id: status.id,
				editUrl: getAdminUrl(`status/edit/${status.id}`),
				items: [String(index + 1), status.status_name],
			})),
		onError(error) {
			toastError(error, 'Список статусов')
		},
	})

	const handleStatusByField = (orderBy: string) => {
		setOrderBy(orderBy)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete status',
		(id: number) => StatusService.delete(id),
		{
			onError(error) {
				toastError(error, 'Статус не удален')
			},
			onSuccess({ data: id }) {
				toastr.success('Статус', 'Статус успешно удален')
				queryData.refetch()
			},
		},
	)

	const { mutateAsync: createAsync, status: createStatus } = useMutation(
		'create status',
		(data: IStatusCreate) =>
			StatusService.create({
				status_name: data.status_name,
			}),
		{
			onError(error) {
				toastError(error, 'Статус не создан')
			},
			onSuccess({ data: id }) {
				toastr.success('Статус', 'Статус успешно создан')
				push(getAdminUrl('statuses'))
			},
		},
	)
	const onSubmit: SubmitHandler<IStatusCreate> = async (data) => {
		await createAsync(data)
	}

	return useMemo(
		() => ({
			deleteAsync,
			createAsync,
			createStatus,
			handleStatusByField,
			onSubmit,
			...queryData,
		}),
		[queryData, handleStatusByField, createStatus, deleteAsync, createAsync],
	)
}
