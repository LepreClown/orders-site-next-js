export interface ITableItem {
	id: number
	editUrl: string
	items: string[]
}

export interface IHeaderItem {
	name: string
	orderBy: string
}

export interface IAdminTableItem {
	tableItem: ITableItem
	removeHandler: (id: number) => void
}
