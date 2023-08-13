import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { IOrderItemProps } from '@/ui/order/order.interface'

import styles from './Order.module.scss'

const OrderTableItem: FC<IOrderItemProps> = ({ order, variant }) => {
	return (
		<Link
			href={order.editUrl}
			className={cn(styles.item, {
				[styles.withText]: order.creator,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}>
			{order && (
				<div className={styles.content}>
					<div className={styles.building}>
						<span>{order.building.building_name}</span>
					</div>

					<div className={styles.params}>
						<div>
							<div>
								Материал: <span>{order.material}</span>
							</div>
							<div className={styles.material}>
								Количество: <span>{order.quantity}</span>
							</div>
							<div>
								Система: <span>{order.system.system_name}</span>{' '}
							</div>
							<div>
								Важность: <span>{order.important.important_name}</span>
							</div>
						</div>
					</div>
					<div className={styles.footer}>
						<div>{order.building.building_name}</div>
						<div>
							<span>{order.created_at}</span>
							<span>{order.status.status_name}</span>
						</div>
					</div>
				</div>
			)}
		</Link>
	)
}

export default OrderTableItem
