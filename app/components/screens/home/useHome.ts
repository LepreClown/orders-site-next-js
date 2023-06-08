import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { convertDate } from '@/utils/date/convertDate'

import { getAdminUrl } from '../../../../config/url.config'

export const useOrders = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push } = useRouter()

	const queryData = useQuery(
		['order list', debouncedSearch],
		() => OrderService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(order): ITableItem => ({
						id: order.id,
						editUrl: getAdminUrl(`order/edit/${order.id}`),
						items: [
							String(order.id),
							convertDate(order.created_at),
							order.building.building_name,
							order.material,
							String(order.quantity),
							order.important.important_name,
						],
					}),
				),
			onError(error) {
				toastError(error, 'Список заявок')
			},
		},
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete order',
		(id: number) => OrderService.delete(id),
		{
			onError(error) {
				toastError(error, 'Заявка не удалена')
			},
			onSuccess({ data: id }) {
				toastr.success('Заявка', 'Заявка успешно удалена')
				queryData.refetch()
			},
		},
	)

	const { mutateAsync: createAsync } = useMutation('create order', () => OrderService.create(), {
		onError(error) {
			toastError(error, 'Заявка не создана')
		},
		onSuccess({ data: id }) {
			toastr.success('Заявка', 'Заявка успешно создана')
			push(getAdminUrl(`order/edit/${id}`))
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
