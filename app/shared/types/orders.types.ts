import { IBuildingItem } from '@/shared/types/building.types'
import { IImportant } from '@/shared/types/important.types'
import { IStatus } from '@/shared/types/status.types'
import { ISystem } from '@/shared/types/system.types'
import { IUserItem } from '@/shared/types/user.types'

export interface IOrderElement {
	id: number
	building: IBuildingItem
	system: ISystem
	important: IImportant
	material: string
	quantity: number
	status: IStatus
	creator: ICreator
	created_at: string
	expected_time: string
	modified_at: string
}
export interface IOrder {
	quantity_orders: number
	orders: IOrderElement[]
}

export interface ICreator extends Omit<IUserItem, 'password'> {}
