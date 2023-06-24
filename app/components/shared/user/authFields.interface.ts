import { FormState, UseFormRegister } from 'react-hook-form'

import { IAuthInput } from '@/screens/auth/auth.interface'

export interface IAuthFields {
	register: UseFormRegister<any>
	type: boolean
	formState: FormState<IAuthInput>
	isPasswordRequired?: boolean
}
