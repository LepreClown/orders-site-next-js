import cn from 'classnames'
import { FC } from 'react'

import styles from './Heading.module.scss'

const SubHeading: FC<{ title: string; className?: string }> = ({ title, className }) => {
	return <h2 className={cn(styles.subHeading, className)}>{title}</h2>
}

export default SubHeading
