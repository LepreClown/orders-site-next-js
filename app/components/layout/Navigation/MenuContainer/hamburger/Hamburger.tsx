import cn from 'classnames'
import React from 'react'

import MenuHamburger from '@/components/layout/Navigation/MenuContainer/hamburger/MenuHamburger'

import MaterialIcon from '@/ui/icons/MaterialIcon'

import { useClickOutside } from '@/hooks/useClickOutside'

import styles from '../Menu.module.scss'
import { firstMenu, userMenu } from '../menu.data'

const Hamburger = () => {
	const { isShow, setIsShow, ref } = useClickOutside(false)

	return (
		<div className={styles.hamburger} ref={ref}>
			<button onClick={() => setIsShow(!isShow)} aria-label="open menu">
				{isShow ? <MaterialIcon name="MdClose" /> : <MaterialIcon name="MdMenu" />}
			</button>
			<div
				className={cn(styles.menuHamburger, {
					[styles.show]: isShow,
				})}>
				<MenuHamburger menu={firstMenu} isShow={isShow} />
				<MenuHamburger menu={userMenu} isShow={isShow} />
			</div>
		</div>
	)
}

export default Hamburger
