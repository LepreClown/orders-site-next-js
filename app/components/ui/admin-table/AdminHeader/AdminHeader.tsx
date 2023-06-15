import { ChangeEvent, FC } from 'react'

import AdminModalButton from '@/ui/admin-table/AdminModalButton/AdminModalButton'
import AdminQuantity from '@/ui/admin-table/AdminQuantity/AdminQuantity'
import SearchField from '@/ui/search-field/SearchField'

import styles from './AdminHeader.module.scss'

interface IAdminHeader {
	searchTerm: string
	toggle: () => void
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	title?: string
	quantity?: number
}

const AdminHeader: FC<IAdminHeader> = ({ searchTerm, handleSearch, toggle, title, quantity }) => {
	return (
		<div className={styles.header}>
			<div className="flex flex-col gap-4">
				<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
				{quantity !== 0 && <AdminQuantity quantity={quantity} />}
			</div>
			<AdminModalButton title={title} toggle={toggle} />
		</div>
	)
}

export default AdminHeader
