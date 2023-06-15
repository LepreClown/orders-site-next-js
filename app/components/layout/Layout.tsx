import React, { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div>
				<Navigation />
			</div>
			<div className={styles.center}>{children}</div>
		</div>
	)
}

export default Layout
