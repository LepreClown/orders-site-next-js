import cn from 'classnames'
import { FC } from 'react'

import { useStatisticsUsers } from '@/screens/admin/home/statistics/useStatisticsUsers'

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { data: countUsers, isLoading } = useStatisticsUsers()

	return (
		<div className={cn(styles.block, styles.count)}>
			<div>
				{isLoading ? (
					<SkeletonLoader height={66} />
				) : (
					<div className={styles.number}>{countUsers}</div>
				)}
				<div className={styles.description}>пользователя</div>
			</div>
		</div>
	)
}

export default CountUsers
