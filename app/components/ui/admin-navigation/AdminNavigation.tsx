import { FC } from 'react'

import AdminNavItem from '@/ui/admin-navigation/AdminNavItem'
import { navItems } from '@/ui/admin-navigation/admin-navigation.data'

import styles from './AdminNavigation.module.scss'

const AdminNavigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((item) => (
					<AdminNavItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
