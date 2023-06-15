import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ISystemCreate } from '@/screens/admin/systems/systems.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { SystemService } from '@/services/system/system.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '../../../../config/url.config'

export const useSystem = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push } = useRouter()

	const queryData = useQuery(['systems list', debouncedSearch], () => SystemService.getAll(), {
		select: ({ data }) =>
			data.map((system) => ({
				id: system.id,
				editUrl: getAdminUrl(`system/edit/${system.id}`),
				items: [String(system.id), system.system_name],
			})),
		onError(error) {
			toastError(error, 'Список систем')
		},
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete system',
		(id: number) => SystemService.delete(id),
		{
			onError(error) {
				toastError(error, 'Система не удален')
			},
			onSuccess({ data: id }) {
				toastr.success('Система', 'Система успешно удален')
				queryData.refetch()
			},
		},
	)

	const { mutateAsync: createAsync } = useMutation(
		'create system',
		(data: ISystemCreate) =>
			SystemService.create({
				system_name: data.system_name,
			}),
		{
			onError(error) {
				toastError(error, 'Система не создана')
			},
			onSuccess({ data: id }) {
				toastr.success('Система', 'Система успешно создана')
				push(getAdminUrl('systems'))
			},
		},
	)
	const onSubmit: SubmitHandler<ISystemCreate> = async (data) => {
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
