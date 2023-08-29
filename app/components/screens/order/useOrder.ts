import { useRouter } from 'next/router'
import { Control, UseFormSetValue, useFieldArray } from 'react-hook-form'
import { useQuery } from 'react-query'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

export const useOrder = (
	setValue: UseFormSetValue<IOrderEditInput>,
	control: Control<IOrderEditInput, any>,
) => {
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
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'materials',
	})

	const addNewField = () => {
		append({ material: '', quantity: null })
	}
	const removeField = (index: number) => {
		remove(index)
	}
	return { isLoading, order, orderId, addNewField, fields, removeField }
}
