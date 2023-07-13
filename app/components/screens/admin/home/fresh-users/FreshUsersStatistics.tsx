import { FC } from 'react'

import FreshUsers from '@/screens/admin/home/fresh-users/FreshUsers'

import styles from './Fresh-users.module.scss'

const FreshUsersStatistics: FC = () => {
	return (
		<div className={styles.wrapper}>
			<FreshUsers />
		</div>
	)
}

export default FreshUsersStatistics
