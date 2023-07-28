import cn from 'classnames'
import { FC, useState } from 'react'

import { IHeaderItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import MaterialIconTi from '@/ui/icons/MaterialIconTi'

import styles from './AdminTable.module.scss'

const AdminTableHeader: FC<{
	headerItems: IHeaderItem[]
	handleOrderByField: (orderBy: string) => void
}> = ({ headerItems, handleOrderByField }) => {
	const [property, setProperty] = useState(false)
	const handleClick = (orderBy: string) => {
		if (property) {
			handleOrderByField(orderBy)
		} else {
			handleOrderByField(`-${orderBy}`)
		}
		setProperty(!property)
	}

	return (
		<div className={cn(styles.itemHeader)}>
			{headerItems.map((value) => (
				<div key={value.name}>
					<div>{value.name}</div>
					<div className={styles.sort} onClick={() => handleClick(value.orderBy)}>
						{value.name !== '№' && <MaterialIconTi name="TiArrowUnsorted" />}
					</div>
				</div>
			))}

			<div>Действия</div>
		</div>
	)
}

export default AdminTableHeader
