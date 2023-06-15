import { FC } from 'react'

import CountUsers from '@/screens/admin/home/statistics/CountUsers'

import styles from '../Admin.module.scss'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
		</div>
	)
}

export default Statistics
