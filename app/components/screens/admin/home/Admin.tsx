import React, { FC } from 'react'

import Statistics from '@/screens/admin/home/statistics/Statistics'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Admin: FC = () => {
	return (
		<Meta title="Админ панель">
			<AdminNavigation />
			<Heading title="Статистика" className="mb-4" />
			<Statistics />
		</Meta>
	)
}

export default Admin
