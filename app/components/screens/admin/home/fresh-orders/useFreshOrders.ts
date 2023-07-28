import { useQuery } from 'react-query'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useFreshOrders = () => {
	return useQuery(['fresh orders'], () => OrderService.getFreshOrders(), {
		select: ({ data }) => data.orders,
		onError(error) {
			toastError(error, 'Список объектов')
		},
	})
}
