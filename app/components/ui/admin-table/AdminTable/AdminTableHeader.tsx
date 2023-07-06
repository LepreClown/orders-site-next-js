import cn from 'classnames'
import { FC } from 'react'

import MaterialIconTi from '@/ui/icons/MaterialIconTi'

import styles from './AdminTable.module.scss'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(styles.itemHeader)}>
			{headerItems.map((value) => (
				<div key={value}>
					<div>{value}</div>
					<div className={styles.sort}>
						<MaterialIconTi name="TiArrowUnsorted" />
					</div>
				</div>
			))}

			<div>Действия</div>
		</div>
	)
}

export default AdminTableHeader
