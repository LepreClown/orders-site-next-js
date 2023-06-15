import { FC } from 'react'

import AdminTableHeader from '@/ui/admin-table/AdminTable/AdminTableHeader'
import AdminTableItem from '@/ui/admin-table/AdminTable/AdminTableItem'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import styles from './AdminTable.module.scss'
import { ITableItem } from './admin-table.interface'

interface IAdminTable {
	tableItems: ITableItem[]
	headerItems: string[]
	isLoading: boolean

	removeHandler: (id: number) => void
}

const AdminTable: FC<IAdminTable> = ({ tableItems, headerItems, isLoading, removeHandler }) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={6} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem key={tableItem.id} tableItem={tableItem} removeHandler={removeHandler} />
				))
			) : (
				<div className={styles.notFound}>
					<span>Ничего не найдено</span>
				</div>
			)}
		</div>
	)
}

export default AdminTable
