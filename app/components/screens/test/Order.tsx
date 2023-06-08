import React, { FC } from 'react'

import OrderList from '@/screens/order2/OrderList'
import { useOrder } from '@/screens/order2/useOrder'

import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const Order: FC = () => {
	const { isLoading, order } = useOrder()

	return (
		<Meta title="Заявка">
			<Heading title="TITLE" className="text-black dark:text-gray-300 mb-8 text-xl " />
			<>
				{isLoading ? (
					<SkeletonLoader count={8} className="flex items-center gap-2 text-2xl" />
				) : (
					order && <OrderList key={order.id} order={order} />
				)}
			</>
		</Meta>
	)
}

export default Order
