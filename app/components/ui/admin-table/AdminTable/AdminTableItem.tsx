import { FC } from 'react'

import { IAdminTableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import AdminActions from './AdminActions/AdminActions'
import styles from './AdminTable.module.scss'

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
	const admin = 'Администратор'
	const user = 'Пользователь'
	const advancedUser = 'Менеджер'

	return (
		<div className={styles.item}>
			{tableItem.items.map((value, index) => (
				<div key={index}>
					{value === 'admin'
						? admin
						: value === 'user'
						? user
						: value === 'advanced_user'
						? advancedUser
						: value}
				</div>
			))}

			<AdminActions editUrl={tableItem.editUrl} removeHandler={() => removeHandler(tableItem.id)} />
		</div>
	)
}

export default AdminTableItem
