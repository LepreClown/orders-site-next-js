import dynamic from 'next/dynamic'
import { FC } from 'react'

import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import styles from '../Menu.module.scss'

const DynamicAuthItems = dynamic(() => import('../auth/AuthItems'), {
	ssr: false,
})
interface IMenuHamburger {
	isShow: boolean
	menu: IMenu
}
const MenuHamburger: FC<IMenuHamburger> = ({ isShow, menu: { items, title } }) => {
	return (
		<div>
			<ul className={styles.ulHamburger}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'Общее' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default MenuHamburger
