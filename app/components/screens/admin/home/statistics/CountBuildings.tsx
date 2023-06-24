import cn from 'classnames'
import { FC } from 'react'

import { useStatisticsBuildings } from '@/screens/admin/home/statistics/useStatisticsBuildings'

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import styles from '../Admin.module.scss'

const CountBuildings: FC = () => {
	const { data: countBuildings, isLoading } = useStatisticsBuildings()

	return (
		<div className={cn(styles.block, styles.count)}>
			<div>
				{isLoading ? (
					<SkeletonLoader height={66} />
				) : (
					<div className={styles.number}>{countBuildings}</div>
				)}
				<div className={styles.description}>объектов</div>
			</div>
		</div>
	)
}

export default CountBuildings
