import { ChangeEvent, FC } from 'react'

import AdminModalButton from '@/ui/admin-table/AdminModalButton/AdminModalButton'
import AdminQuantity from '@/ui/admin-table/AdminQuantity/AdminQuantity'
import SearchField from '@/ui/search-field/SearchField'

import styles from './AdminHeader.module.scss'

interface IAdminHeader {
	searchTerm?: string
	toggle: () => void
	handleSearch?: (event: ChangeEvent<HTMLInputElement>) => void
	title?: string
	inputSearch?: string
	quantity?: number
}

const AdminHeader: FC<IAdminHeader> = ({
	searchTerm,
	handleSearch,
	inputSearch,
	toggle,
	title,
	quantity,
}) => {
	return (
		<div className={styles.header}>
			{handleSearch && (
				<div className={styles.searchField}>
					<SearchField
						searchTerm={searchTerm}
						handleSearch={handleSearch}
						inputSearch={inputSearch}
					/>
					{quantity !== 0 && <AdminQuantity quantity={quantity} />}
				</div>
			)}
			<AdminModalButton title={title} toggle={toggle} />
		</div>
	)
}

export default AdminHeader
