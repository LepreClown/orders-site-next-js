import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'
import OrderFieldList, { IOrderFields } from '@/screens/order/OrderFieldList'
import { useOrder } from '@/screens/order/useOrder'

import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const Order: FC = () => {
	const {
		register,
		formState: { errors },
		setValue,
	} = useForm<IOrderEditInput>({
		mode: 'onChange',
	})

	const { isLoading, order } = useOrder(setValue)
	const dataFields: IOrderFields = {
		order,
		register,
		errors,
	}
	return (
		<Meta title="Заявка">
			<Heading title="Заявка" />
			{isLoading ? (
				<SkeletonLoader count={3} className={formStyles.form} />
			) : (
				<form className={formStyles.form}>
					<OrderFieldList {...dataFields} />
				</form>
			)}
		</Meta>
	)
}

export default Order
