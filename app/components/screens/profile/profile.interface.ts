import { FormState, UseFormRegister } from 'react-hook-form'

import { IUserItem } from '@/shared/types/user.types'

import { IUserState } from '@/store/user/user.interface'

export interface IProfile
	extends Pick<IUserItem, 'telephone' | 'password' | 'surname' | 'name' | 'role' | 'created_at'> {}

export interface IProfileField {
	formState: FormState<IProfile>
	register: UseFormRegister<IProfile>
	user: IUserState
}
