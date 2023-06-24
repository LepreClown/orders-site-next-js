import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IOrderCreate } from '@/screens/admin/orders/orders.interface'

import { IOrderItem } from '@/ui/order/order.interface'

import { useAuth } from '@/hooks/useAuth'
import { useDebounce } from '@/hooks/useDebounce'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { convertDate } from '@/utils/date/convertDate'

import { getOrderUrl } from '../../../config/url.config'

export const useHome = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push } = useRouter()
	const { user } = useAuth()

	const { isSuccess, data, isLoading } = useQuery(
		['orders page', debouncedSearch, currentPage],
		() => OrderService.getAllHome(currentPage - 1, debouncedSearch),
		{
			select: ({ data }) => data,
			onError(error) {
				toastError(error, 'Список заявок')
			},
		},
	)

	const ordersData = isSuccess
		? data.orders.map(
				(order): IOrderItem => ({
					id: order.id,
					editUrl: getOrderUrl(`${order.id}`),
					building: order.building,
					system: order.system,
					important: order.important,
					material: order.material,
					quantity: order.quantity,
					creator: order.creator,
					status: order.status,
					created_at: convertDate(order.created_at),
				}),
		  )
		: []

	const quantityOrders = Number(data?.quantity_orders)

	const { mutateAsync: createAsync, status: createStatus } = useMutation(
		'create home order',
		(data: IOrderCreate) =>
			OrderService.create({
				building_id: data.building_id,
				system_id: data.system_id,
				important_id: data.important_id,
				material: data.material,
				quantity: Number(data.quantity),
				creator_id: user.id,
				status_id: data.status_id,
				expected_time: String(Date.now()),
			}),
		{
			onError(error) {
				toastError(error, 'Заявка не создана')
			},
			onSuccess({ data: id }) {
				toastr.success('Заявка', 'Заявка успешно создана')
				push('')
			},
		},
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const onPageChange = (page: number) => {
		setCurrentPage(page)
	}

	const onSubmit: SubmitHandler<IOrderCreate> = async (data) => {
		await createAsync(data)
	}
	return useMemo(
		() => ({
			handleSearch,
			onPageChange,
			currentPage,
			searchTerm,
			ordersData,
			isLoading,
			createStatus,
			quantityOrders,
			onSubmit,
		}),
		[handleSearch, createStatus, ordersData, isLoading, searchTerm],
	)
}
