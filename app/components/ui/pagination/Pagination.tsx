import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import { IPaginationProps } from '@/ui/pagination/pagination.interface'

import styles from './Pagination.module.scss'

const Pagination: FC<IPaginationProps> = ({ quantity, currentPage, onPageChange }) => {
	const pageCount = Math.ceil(quantity / 10)

	if (pageCount === 1 || pageCount === 0) return null

	return (
		<ReactPaginate
			pageCount={pageCount}
			forcePage={currentPage - 1}
			pageRangeDisplayed={8}
			className={styles.root}
			breakLabel={'...'}
			previousLabel={'<'}
			nextLabel={'>'}
			onPageChange={(event) => onPageChange(event.selected + 1)}
		/>
	)
}

export default Pagination
