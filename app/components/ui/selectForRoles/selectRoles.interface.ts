import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'

import { IFieldProps } from '@/ui/form-elements/form-elements.interface'

export interface IOption {
	label: string
	value: number
}

export interface IOptionForRoles {
	label: string
	value: string
}

export interface ISelectForRoles extends IFieldProps {
	options: Options<IOptionForRoles>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}
