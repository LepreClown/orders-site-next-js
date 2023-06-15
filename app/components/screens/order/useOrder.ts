import { useRouter } from 'next/router'
import { UseFormSetValue } from 'react-hook-form'
import { useQuery } from 'react-query'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

export const useOrder = (setValue: UseFormSetValue<IOrderEditInput>) => {
	const { query } = useRouter()

	const orderId = Number(query.id)

	const { isLoading, data: order } = useQuery(
		['order page', orderId],
		() => OrderService.getById(orderId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Заявка')
			},
			enabled: !!query.id,
		},
	)

	return { isLoading, order, orderId }
}
