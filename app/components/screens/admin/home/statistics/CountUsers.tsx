import cn from 'classnames'
import { FC } from 'react'

import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	// const { isLoading, data: response } = useQuery('Count users', () => AdminService.getCountUsers())
	return (
		<div className={cn(styles.block, styles.countUsers)}>
			<div>
				<div className={styles.number}>4</div>
				<div className={styles.description}>users</div>
			</div>
		</div>
	)
}

export default CountUsers
