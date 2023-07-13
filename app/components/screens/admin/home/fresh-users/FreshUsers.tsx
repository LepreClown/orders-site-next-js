import { FC } from 'react'

import FreshUserItem from '@/screens/admin/home/fresh-users/FreshUserItem'
import { useFreshUsers } from '@/screens/admin/home/fresh-users/useFreshUsers'

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import styles from './Fresh-users.module.scss'

const CountUsers: FC = () => {
	const { data: freshUsers, isLoading } = useFreshUsers()
	return (
		<div className={styles.block}>
			<div>
				{isLoading ? (
					<SkeletonLoader height={66} />
				) : (
					<div className={styles.item}>
						{freshUsers?.map((user) => (
							<FreshUserItem user={user} key={user.id} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default CountUsers
