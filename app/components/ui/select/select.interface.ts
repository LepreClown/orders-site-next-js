import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'

import { IFieldProps } from '@/ui/form-elements/form-elements.interface'

export interface IOption {
	label: string
	value: number
}

export interface IOptionForUser {
	label: string
	value: string
}

export interface ISelect extends IFieldProps {
	options: Options<IOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}
