import { FC } from 'react'

import FreshOrders from '@/screens/admin/home/fresh-orders/FreshOrders'

import styles from '../Admin.module.scss'

const FreshOrdersStatistics: FC = () => {
	return (
		<div className={styles.userStatistics}>
			<FreshOrders />
		</div>
	)
}

export default FreshOrdersStatistics
