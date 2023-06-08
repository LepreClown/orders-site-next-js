import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useDebounce } from '@/hooks/useDebounce'

import { StatusService } from '@/services/status/status.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '../../../../config/url.config'

export const useStatus = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push } = useRouter()

	const queryData = useQuery(['status list', debouncedSearch], () => StatusService.getAll(), {
		select: ({ data }) =>
			data.map((status) => ({
				id: status.id,
				editUrl: getAdminUrl(`status/edit/${status.id}`),
				items: [String(status.id), status.status_name],
			})),
		onError(error) {
			toastError(error, 'Список статусов')
		},
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
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

	const { mutateAsync: createAsync } = useMutation('create status', () => StatusService.create(), {
		onError(error) {
			toastError(error, 'Статус не создан')
		},
		onSuccess({ data: id }) {
			toastr.success('Статус', 'Статус успешно создан')
			push(getAdminUrl(`status/edit/${id}`))
		},
	})

	return useMemo(
		() => ({
			deleteAsync,
			handleSearch,
			createAsync,
			searchTerm,
			...queryData,
		}),
		[queryData, searchTerm, deleteAsync, createAsync],
	)
}
