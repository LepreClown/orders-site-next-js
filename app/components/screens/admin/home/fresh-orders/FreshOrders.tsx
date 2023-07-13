import { FC } from 'react'

import FreshOrderItem from '@/screens/admin/home/fresh-orders/FreshOrderItem'
import FreshOrderItemHeader from '@/screens/admin/home/fresh-orders/FreshOrderItemHeader'
import { useFreshOrders } from '@/screens/admin/home/fresh-orders/useFreshOrders'

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import styles from './Fresh-orders.module.scss'

const FreshOrders: FC = () => {
	const { data: freshOrders, isLoading } = useFreshOrders()

	return (
		<div className={styles.wrapper}>
			<div className="h-full">
				{isLoading ? (
					<SkeletonLoader height={66} />
				) : (
					<div>
						<FreshOrderItemHeader />
						<div className="flex w-full justify-between px-10 items-center h-full  font-medium  text-gray-700 dark:text-gray-300">
							{freshOrders?.map((order) => (
								<FreshOrderItem order={order} key={order.id} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default FreshOrders
