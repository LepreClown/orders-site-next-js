import cn from 'classnames'
import { FC } from 'react'

const SubHeading: FC<{ title: string; className?: string }> = ({ title, className }) => {
	return (
		<h2 className={cn('dark-gray-600 dark:text-white text-xl mb-5 font-semibold', className)}>
			{title}
		</h2>
	)
}

export default SubHeading
