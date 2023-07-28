import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ISystemCreate } from '@/screens/admin/systems/systems.interface'

import { SystemService } from '@/services/system/system.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '../../../../config/url.config'

export const useSystem = () => {
	const { push } = useRouter()
	const [orderBy, setOrderBy] = useState('system_name')

	const queryData = useQuery(['systems list', orderBy], () => SystemService.getAll(orderBy), {
		select: ({ data }) =>
			data.map((system, index) => ({
				id: system.id,
				editUrl: getAdminUrl(`system/edit/${system.id}`),
				items: [String(index + 1), system.system_name],
			})),
		onError(error) {
			toastError(error, 'Список систем')
		},
	})
	const handleSystemOrderBy = (orderBy: string) => {
		setOrderBy(orderBy)
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

	const { mutateAsync: createAsync, status: createStatus } = useMutation(
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
			createStatus,
			onSubmit,
			handleSystemOrderBy,
			...queryData,
		}),
		[queryData, handleSystemOrderBy, createStatus, deleteAsync, createAsync],
	)
}
