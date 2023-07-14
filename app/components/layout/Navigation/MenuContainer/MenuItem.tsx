import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import MaterialIcon from '@/ui/icons/MaterialIcon'

import styles from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]:
					asPath === item.link ||
					(asPath.includes(item.link) && item.link !== '/') ||
					asPath.includes(item.secondLink),
			})}>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
