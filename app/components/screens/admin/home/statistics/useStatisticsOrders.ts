import { useQuery } from 'react-query'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useStatisticsOrders = () => {
	return useQuery(['orders count'], () => OrderService.getOrders(), {
		select: ({ data }) => data.quantity_orders,
		onError(error) {
			toastError(error, 'Список объектов')
		},
	})
}
