import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { INavItem } from '@/ui/admin-navigation/admin-navigation.interface'

import styles from './AdminNavigation.module.scss'

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { title, link } }) => {
	const { asPath } = useRouter()
	return (
		<li>
			<Link href={link}>
				<span className={cn({ [styles.active]: asPath === link })}>{title}</span>
			</Link>
		</li>
	)
}

export default AdminNavItem
