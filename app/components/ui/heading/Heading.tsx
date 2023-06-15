import { FC } from 'react'

type THeading = {
	title: string
	className?: string
}

const Heading: FC<THeading> = ({ title, className = '' }) => {
	return (
		<h1
			className={`text-gray-950 opacity-100 dark:text-white  font-semibold ${
				className.includes('xl') ? '' : 'text-3xl'
			} ${className}`}>
			{title}
		</h1>
	)
}

export default Heading
