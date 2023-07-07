import { FC } from 'react'

import Logo from '@/components/layout/Navigation/Logo'
import MenuContainer from '@/components/layout/Navigation/MenuContainer/MenuContainer'
import Hamburger from '@/components/layout/Navigation/MenuContainer/hamburger/Hamburger'

import ThemeToggle from '@/ui/theme-toggle/ThemeToggle'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
			<Hamburger />
			<ThemeToggle />
		</div>
	)
}

export default Navigation
