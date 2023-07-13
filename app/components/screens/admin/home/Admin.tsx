import React, { FC } from 'react'

import FreshOrdersStatistics from '@/screens/admin/home/fresh-orders/FreshOrdersStatistics'
import FreshUsersStatistics from '@/screens/admin/home/fresh-users/FreshUsersStatistics'
import Statistics from '@/screens/admin/home/statistics/Statistics'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'

import Meta from '@/utils/meta/Meta'

const Admin: FC = () => {
	return (
		<Meta title="Админ панель">
			<AdminNavigation />
			<Heading title="Статистика" className="mb-4" />
			<Statistics />
			<SubHeading title="Новые пользователи" className="mt-8" />
			<FreshUsersStatistics />
			<SubHeading title="Новые заявки" className="mt-8" />
			<FreshOrdersStatistics />
		</Meta>
	)
}

export default Admin
