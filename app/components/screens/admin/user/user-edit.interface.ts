import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

import { IOptionForUser } from '@/ui/select/select.interface'

import { IUserItem } from '@/shared/types/user.types'

export interface IUserEditInput extends IUserItem {}

export interface IUserFields {
	errors: FieldErrors<IUserEditInput>
	register: UseFormRegister<IUserEditInput>
	control: Control<IUserEditInput, any>
	roles: IOptionForUser[] | undefined

	isRoleLoading: boolean
}
