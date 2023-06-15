export interface IPaginationProps {
	items: number
	pageSize?: number
	currentPage: number
	quantity: number
	onPageChange: (page: number) => void
}
