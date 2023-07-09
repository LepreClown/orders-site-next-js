import { FC } from 'react'

import { IAuthFields } from '@/components/shared/user/authFields.interface'

import FieldAuth from '@/ui/form-elements-auth/FieldAuth'

import { validEmail } from '@/shared/regex'

const AuthFields: FC<IAuthFields> = ({
	register,
	formState,
	isPasswordRequired = false,
	type = true,
}) => {
	return (
		<>
			<FieldAuth
				{...register('telephone', {
					required: 'Номер телефона является обязательным полем!',
					pattern: {
						value: validEmail,
						message: 'Введите действительный номер телефона',
					},
				})}
				type="number"
				placeholder="Номер телефона"
				error={formState.errors.telephone}
			/>
			<FieldAuth
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Пароль является обязательным!',
								minLength: {
									value: 5,
									message: 'Минимальная длина 5 символов!',
								},
						  }
						: {},
				)}
				placeholder="Пароль"
				type={type ? 'password' : 'text'}
				error={formState.errors.password}
			/>
		</>
	)
}

export default AuthFields
