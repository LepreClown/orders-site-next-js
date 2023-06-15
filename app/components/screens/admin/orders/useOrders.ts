import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IOrderCreate } from '@/screens/admin/orders/orders.interface'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { convertDate } from '@/utils/date/convertDate'

import { getAdminUrl } from '../../../../config/url.config'

export const useOrders = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push } = useRouter()

	const queryData = useQuery(
		['order list', debouncedSearch, currentPage],
		() => OrderService.getAll(currentPage - 1, debouncedSearch),
		{
			select: ({ data }) => data,
			onError(error) {
				toastError(error, 'Список заявок')
			},
		},
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const ordersData = queryData.isSuccess
		? queryData.data.orders.map(
				(order): ITableItem => ({
					id: order.id,
					editUrl: getAdminUrl(`order/edit/${order.id}`),
					items: [
						convertDate(order.created_at),
						order.building.building_name,
						order.material,
						String(order.quantity),
						order.important.important_name,
					],
				}),
		  )
		: []

	const quantityOrders = Number(queryData.data?.quantity_orders)

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

	const { mutateAsync: createAsync } = useMutation(
		'create order',
		(data: IOrderCreate) =>
			OrderService.create({
				building_id: data.building_id,
				system_id: data.system_id,
				important_id: data.important_id,
				material: data.material,
				quantity: Number(data.quantity),
				creator_id: data.creator_id,
				status_id: data.status_id,
				expected_time: Date.now(),
			}),
		{
			onError(error) {
				toastError(error, 'Заявка не создана')
			},
			onSuccess({ data: id }) {
				toastr.success('Заявка', 'Заявка успешно создана')
				push(getAdminUrl('orders'))
			},
		},
	)
	const onSubmit: SubmitHandler<IOrderCreate> = async (data) => {
		await createAsync(data)
	}
	const onPageChange = (page: number) => {
		setCurrentPage(page)
	}

	return useMemo(
		() => ({
			deleteAsync,
			handleSearch,
			createAsync,
			currentPage,
			onSubmit,
			quantityOrders,
			onPageChange,
			searchTerm,
			ordersData,
			...queryData,
		}),
		[handleSearch, searchTerm, deleteAsync, queryData, createAsync],
	)
}
