import Link from 'next/link'
import { FC } from 'react'

import Heading from '@/ui/heading/Heading'

import styles from './Navigation.module.scss'

const Logo: FC = () => {
	return (
		<Link href={'/'}>
			<div className={styles.logo}>
				<Heading title="PRIM" className={styles.text} />
				<Heading title="E" className={styles.text2} />
			</div>
		</Link>
	)
}

export default Logo
