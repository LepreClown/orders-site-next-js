import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'
import OrderFieldList, { IOrderFields } from '@/screens/order/OrderFieldList'
import { useOrder } from '@/screens/order/useOrder'

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

const OrderUser: FC = () => {
	const {
		register,
		control,
		formState: { errors },
		setValue,
	} = useForm<IOrderEditInput>({
		mode: 'onChange',
	})
	const { isLoading, order, fields, addNewField, removeField } = useOrder(setValue, control)

	const dataFields: IOrderFields = {
		order,
		fields,
		addNewField,
		removeField,
		register,
		errors,
		control,
	}
	return isLoading ? (
		<div className="mt-12">
			<SkeletonLoader count={4} className="mb-12" height={90} />
		</div>
	) : (
		<OrderFieldList {...dataFields} />
	)
}

export default OrderUser
