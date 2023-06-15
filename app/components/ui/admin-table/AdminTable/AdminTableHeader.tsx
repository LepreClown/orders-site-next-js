import cn from 'classnames'
import { FC } from 'react'

import styles from './AdminTable.module.scss'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(styles.itemHeader)}>
			{headerItems.map((value) => (
				<div key={value}>{value}</div>
			))}

			<div>Действия</div>
		</div>
	)
}

export default AdminTableHeader
