import cn from 'classnames'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	const theme = localStorage.getItem('theme')
	return (
		<Skeleton
			{...rest}
			baseColor={theme === 'light' ? '#f3f3f3' : '#1F2125'}
			highlightColor={theme === 'light' ? '#ecebeb' : '#292A2E'}
			className={cn('rounded-lg', className)}
		/>
	)
}

export default SkeletonLoader
