import cn from 'classnames'
import { FC } from 'react'

import styles from './Heading.module.scss'

type THeading = {
	title: string
	className?: string
}

const Heading: FC<THeading> = ({ title, className = '' }) => {
	return (
		<h1 className={cn(styles.heading, className.includes('xl') ? '' : 'text-3xl', className)}>
			{title}
		</h1>
	)
}

export default Heading
