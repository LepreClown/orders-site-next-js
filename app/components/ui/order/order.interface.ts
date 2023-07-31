import { IBuildingItem } from '@/shared/types/building.types'
import { IImportant } from '@/shared/types/important.types'
import { ICreator } from '@/shared/types/orders.types'
import { IStatus } from '@/shared/types/status.types'
import { ISystem } from '@/shared/types/system.types'

export interface IOrderItem {
	id: number
	building: IBuildingItem
	system: ISystem
	important: IImportant
	material: string
	quantity: number
	creator: ICreator
	status: IStatus
	created_at: string
	description: string
	expected_at?: string
	modified_at?: string
	editUrl: string
}

export interface IOrderItemProps {
	order: IOrderItem
	variant: 'horizontal' | 'vertical'
}
