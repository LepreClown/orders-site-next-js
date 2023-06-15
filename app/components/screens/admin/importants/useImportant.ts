import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IImportantCreate } from '@/screens/admin/importants/importants.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { ImportantService } from '@/services/important/important.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '../../../../config/url.config'

export const useImportant = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push } = useRouter()

	const queryData = useQuery(['important list', debouncedSearch], () => ImportantService.getAll(), {
		select: ({ data }) =>
			data.map((important) => ({
				id: important.id,
				editUrl: getAdminUrl(`important/edit/${important.id}`),
				items: [String(important.id), important.important_name],
			})),
		onError(error) {
			toastError(error, 'Список срочностей')
		},
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
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

	const { mutateAsync: createAsync } = useMutation(
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
			handleSearch,
			createAsync,
			searchTerm,
			onSubmit,
			...queryData,
		}),
		[queryData, searchTerm, deleteAsync, createAsync],
	)
}
