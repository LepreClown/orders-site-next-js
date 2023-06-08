import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { IOrderItemProps } from '@/ui/order/order.interface'

import styles from './Order.module.scss'

const OrderItem: FC<IOrderItemProps> = ({ order, variant }) => {
	return (
		<Link
			href={order.editUrl}
			className={cn(styles.item, {
				[styles.withText]: order.creator,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}>
			{order.creator && (
				<div className={styles.content}>
					<div className={styles.title}>{order.creator.name}</div>
					{order.creator.surname && <div className={styles.subTitle}> {order.creator.surname}</div>}
				</div>
			)}
		</Link>
	)
}

export default OrderItem
