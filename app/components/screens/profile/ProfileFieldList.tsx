import React, { FC } from 'react'

import { IProfileField } from '@/screens/profile/profile.interface'

import Field from '@/ui/form-elements/Field'
import SubHeading from '@/ui/heading/SubHeading'

import { validEmail } from '@/shared/regex'

import styles from './Profile.module.scss'

const ProfileFieldList: FC<IProfileField> = ({ user, register, formState }) => {
	return (
		<>
			<div className={styles.fields}>
				<SubHeading
					title="Информация о пользователе"
					className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
				/>
				<div>
					<Field
						{...register('name', {
							required: 'Имя не указано',
						})}
						type="text"
						disabled={user?.role === 'user'}
						placeholder="Имя"
						error={formState.errors.name}
						style={{ width: '20%' }}
					/>
					<Field
						{...register('surname', {
							required: 'Фимилия не указана',
						})}
						type="text"
						disabled={user?.role === 'user'}
						placeholder="Фамилия"
						error={formState.errors.surname}
						style={{ width: '20%' }}
					/>
				</div>
				<SubHeading
					title="Номер телефона"
					className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
				/>
				<div>
					<Field
						{...register('telephone', {
							required: 'Номер телефона является обязательным полем!',
							pattern: {
								value: validEmail,
								message: 'Введите действительный номер телефона',
							},
						})}
						disabled={user?.role === 'user'}
						placeholder="Номер телефона"
						type="number"
						error={formState.errors.telephone}
						style={{ width: '20%' }}
					/>
				</div>
				<SubHeading
					title="Роль"
					className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
				/>
				<Field
					{...register('role', {
						required: 'Роль не указана',
					})}
					type="text"
					disabled={true}
					placeholder="Роль"
					error={formState.errors.role}
					style={{ width: '20%' }}
				/>
			</div>
		</>
	)
}

export default ProfileFieldList
