import cn from 'classnames'
import React, { FC } from 'react'

import OrderTableItem from '@/ui/order/OrderTableItem'
import { IOrderItem } from '@/ui/order/order.interface'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import styles from './Order.module.scss'

const OrderTable: FC<{ orders: IOrderItem[]; isLoading: boolean }> = ({ orders, isLoading }) => {
	return (
		<div className={styles.gallery}>
			{isLoading ? (
				[...new Array(6)].map((_, index) => (
					<div key={index} className={cn(styles.item, styles.horizontal)}>
						<SkeletonLoader height={224} />
					</div>
				))
			) : orders.length ? (
				orders.map((order) => <OrderTableItem key={order.id} order={order} variant="horizontal" />)
			) : (
				<div className="text-lg text-gray-950 dark:text-white text-opacity-60 py-8">
					Ни одной заявки ещё не создано!
				</div>
			)}
		</div>
	)
}

export default OrderTable
