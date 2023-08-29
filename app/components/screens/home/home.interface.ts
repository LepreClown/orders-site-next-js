import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

import { IOrderCreate } from '@/screens/admin/orders/orders.interface'

import { IOption } from '@/ui/select/select.interface'

import { IMaterials } from '@/shared/types/orders.types'

export interface IOrderHomeCreate {
	building_id: number
	system_id: number
	important_id: number
	material: string
	quantity: number
	creator_id: number
	status_id: number
	expected_time: string
}

export interface IOrderHomeFields {
	errors: FieldErrors<IOrderCreate>
	register: UseFormRegister<IOrderCreate>
	control: Control<IOrderCreate, any>
	removeField: (index: number) => void
	addNewField: () => void
	fields: IMaterials[]
	importants: IOption[] | undefined
	building: IOption[] | undefined
	systems: IOption[] | undefined
	statuses: IOption[] | undefined
	isImportantsLoading: boolean
	isBuildingsLoading: boolean
	isSystemsLoading: boolean
	isStatusLoading: boolean
}
