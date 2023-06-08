import { FC } from 'react'

import OrderItem from '@/ui/order/OrderItem'
import { IOrderItem } from '@/ui/order/order.interface'

import styles from './Order.module.scss'

const Order: FC<{ orders: IOrderItem[] }> = ({ orders }) => {
	return (
		<div className={styles.gallery}>
			{orders.map((order) => (
				<OrderItem key={order.id} order={order} variant="vertical" />
			))}
		</div>
	)
}

export default Order
