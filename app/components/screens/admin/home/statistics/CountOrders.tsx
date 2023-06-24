import cn from 'classnames'
import { FC } from 'react'

import { useStatisticsOrders } from '@/screens/admin/home/statistics/useStatisticsOrders'

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import styles from '../Admin.module.scss'

const CountOrders: FC = () => {
	const { data: countOrders, isLoading } = useStatisticsOrders()

	return (
		<div className={cn(styles.block, styles.count)}>
			<div>
				{isLoading ? (
					<SkeletonLoader height={64} />
				) : (
					<div className={styles.number}>{countOrders}</div>
				)}
				<div className={styles.description}>заявок</div>
			</div>
		</div>
	)
}

export default CountOrders
