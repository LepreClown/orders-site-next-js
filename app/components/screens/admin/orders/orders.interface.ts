import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

import { IOption } from '@/ui/select/select.interface'

import { IMaterials } from '@/shared/types/orders.types'

export interface IOrderCreate {
	building_id: number
	system_id: number
	important_id: number
	materials: IMaterials[]
	creator_id: number
	status_id: number
	description: string
	expected_time: string
}

export interface IOrdersFields {
	errors: FieldErrors<IOrderCreate>
	register: UseFormRegister<IOrderCreate>
	control: Control<IOrderCreate, any>
	importants: IOption[] | undefined
	building: IOption[] | undefined
	users: IOption[] | undefined
	systems: IOption[] | undefined
	statuses: IOption[] | undefined
	isUsersLoading: boolean
	isImportantsLoading: boolean
	isBuildingsLoading: boolean
	isSystemsLoading: boolean
	isStatusLoading: boolean
}
