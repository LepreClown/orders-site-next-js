import { FC } from 'react'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { getAdminUrl } from '../../../../config/url.config'

const data = [
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['serp2004@mail.ru', '29.01.21', 'пользователь'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['velikiy@mail.ru', '21.04.23', 'пользователь'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['ivan2004@mail.ru', '23.05.23', 'администратор'],
	},
	{
		_id: String(123),
		editUrl: getAdminUrl(`user/edit/${123}`),
		items: ['antipLOX2003@mail.ru', '12.08.23', 'менеджер'],
	},
]

const UserList: FC = () => {
	const isLoading = false
	const deleteAsync = (id: string) => id
	return (
		<Meta title="Пользователи">
			<AdminNavigation />
			<Heading title="Пользователи" />
			<AdminHeader searchTerm="" handleSearch={(event) => 0} />
			<AdminTable
				tableItems={data || []}
				headerItems={['Email', 'Дата регистрации', 'Роль']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default UserList
