import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { IOrderElement } from '@/shared/types/orders.types'

import { convertDateToTimeAgo } from '@/utils/date/convertDateToTimeAgo'

import { getAdminUrl } from '../../../../../config/url.config'

import styles from './Fresh-orders.module.scss'

const FreshOrderItem: FC<{ order: IOrderElement }> = ({ order }) => {
	const d = convertDateToTimeAgo(new Date(order.created_at))

	return (
		<Link href={getAdminUrl(`order/edit/${order.id}`)}>
			<div className={styles.params}>
				<span className={styles.material}>{order.material}</span>
				<span className={styles.quantity}>{order.quantity}</span>
				<span className={styles.date}>{d}</span>
				<span className={styles.important}>{order.important.important_name}</span>
				<span
					className={cn(styles.status, {
						['text-primary']: order.status.status_name === 'Доставлено',
						['text-[#FFBF00]']: order.status.status_name === 'В пути',
						['text-[#880808]']: order.status.status_name === 'Потерялся',
						['text-[#C41E3A]']:
							order.status.status_name === 'Возврат' || order.status.status_name === 'Утерян',
						['text-[#CC5500]']: order.status.status_name === 'Заказан',
					})}>
					{order.status.status_name}
				</span>
			</div>
		</Link>
	)
}

export default FreshOrderItem
