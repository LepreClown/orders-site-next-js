import { FC } from 'react'

import { useStatus } from '@/screens/admin/statuses/useStatus'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const UserList: FC = () => {
	const { searchTerm, handleSearch, data, isLoading, deleteAsync } = useStatus()
	return (
		<Meta title="Статусы">
			<AdminNavigation />
			<Heading title="Статусы" />
			<AdminHeader title="заявку" searchTerm={searchTerm} handleSearch={handleSearch} />
			<AdminTable
				tableItems={data || []}
				headerItems={['№', 'Название статуса']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default UserList
