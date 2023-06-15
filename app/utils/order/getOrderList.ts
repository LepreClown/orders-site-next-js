export const getOrdersListEach = (index: number, length: number, name: string) =>
	index + 1 === length ? name : `${name}, `

interface IArrayItem {
	building_name: string
}
export const getOrderList = (array: IArrayItem[]) => array.map((i) => i.building_name).join(', ')
