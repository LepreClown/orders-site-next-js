import { FC } from 'react'

import CountBuildings from '@/screens/admin/home/statistics/CountBuildings'
import CountOrders from '@/screens/admin/home/statistics/CountOrders'
import CountUsers from '@/screens/admin/home/statistics/CountUsers'

import styles from '../Admin.module.scss'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<CountOrders />
			<CountBuildings />
		</div>
	)
}

export default Statistics
