import { FC } from 'react'

import { IAuthFields } from '@/components/shared/user/authFields.interface'
import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

const AuthFields: FC<IAuthFields> = ({ register, formState, isPasswordRequired = false }) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email',
					},
				})}
				placeholder="E-mail"
				error={formState.errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols!',
								},
						  }
						: {},
				)}
				placeholder="Password"
				type="password"
				error={formState.errors.password}
			/>
		</>
	)
}

export default AuthFields
