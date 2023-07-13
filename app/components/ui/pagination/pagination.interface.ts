export interface IPaginationProps {
	items: number
	isAdminPage?: boolean
	pageSize?: number
	currentPage: number
	quantity: number
	onPageChange: (page: number) => void
}
