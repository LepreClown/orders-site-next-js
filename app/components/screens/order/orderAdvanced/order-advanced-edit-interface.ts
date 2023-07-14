import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

import { IOption } from '@/ui/select/select.interface'

import { IOrderElement } from '@/shared/types/orders.types'

export interface IOrderEditInputAdvanced extends IOrderElement {}

export interface IOrderOptionAdvanced {
	building_id: number
	system_id: number
	important_id: number
	material: string
	quantity: number
	creator_id: number
}

export interface IOrderEditFieldsAdvanced {
	errors: FieldErrors<IOrderEditInputAdvanced>
	register: UseFormRegister<IOrderEditInputAdvanced>
	control: Control<IOrderEditInputAdvanced, any>
	importants: IOption[] | undefined
	building: IOption[] | undefined
	systems: IOption[] | undefined
	statuses: IOption[] | undefined
	isImportantsLoading: boolean
	isBuildingsLoading: boolean
	isSystemsLoading: boolean
	isStatusLoading: boolean
}
