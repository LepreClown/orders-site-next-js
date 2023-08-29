import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

import { IOption } from '@/ui/select/select.interface'

import { IMaterials, IOrderElement } from '@/shared/types/orders.types'

// export interface IOrderEditInput
// 	extends Omit<IOrder, 'createdAt' | 'important' | 'system' | 'building'> {
// 	building_id: number
// 	system_id: number
// 	important_id: number
// 	creator_id: number
// }
export interface IOrderEditInput extends IOrderElement {}

export interface IOrderOption {
	building_id: number
	system_id: number
	important_id: number
	material: string
	quantity: number
	creator_id: number
}

export interface IOrderEditFields {
	errors: FieldErrors<IOrderEditInput>
	register: UseFormRegister<IOrderEditInput>
	control: Control<IOrderEditInput, any>
	importants: IOption[] | undefined
	building: IOption[] | undefined
	systems: IOption[] | undefined
	statuses: IOption[] | undefined
	fields: IMaterials[]
	addNewField: () => void
	removeField: (index: number) => void
	isImportantsLoading: boolean
	isBuildingsLoading: boolean
	isSystemsLoading: boolean
	isStatusLoading: boolean
}
