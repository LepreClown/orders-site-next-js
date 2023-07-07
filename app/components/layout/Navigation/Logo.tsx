import Link from 'next/link'
import { FC } from 'react'

import Heading from '@/ui/heading/Heading'

import styles from './Navigation.module.scss'

const Logo: FC = () => {
	return (
		<Link href={'/'}>
			<div className={styles.logo}>
				<Heading title="PRIM" className="tracking-[0.5em] text-primary text-5xl" />
				<Heading title="E" className="text-primary text-5xl" />
			</div>
		</Link>
	)
}

export default Logo
