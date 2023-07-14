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
			<div className={styles.table}>
				<FreshOrderItemHeader />
				{isLoading
					? [...new Array(4)].map((_, index) => (
							<div key={index} className={styles.content}>
								<SkeletonLoader count={1} height={20} />
							</div>
					  ))
					: freshOrders?.map((order) => (
							<div key={order.id} className={styles.content}>
								<FreshOrderItem order={order} />
							</div>
					  ))}
			</div>
		</div>
	)
}

export default FreshOrders
