import { useQuery } from 'react-query'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useFreshOrders = () => {
	return useQuery(['fresh orders'], () => OrderService.getOrders(), {
		select: ({ data }) => data.orders.slice(0, 4),
		onError(error) {
			toastError(error, 'Список объектов')
		},
	})
}
