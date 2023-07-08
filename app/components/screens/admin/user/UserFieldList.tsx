import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { IUserFields } from '@/screens/admin/user/user-edit.interface'

import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import SubHeading from '@/ui/heading/SubHeading'

const DynamicSelect = dynamic(() => import('@/ui/selectForRoles/SelectRoles'), {
	ssr: false,
})

const UserFiledList: FC<IUserFields> = ({ errors, register, control, roles, isRoleLoading }) => {
	return (
		<div className={formStyles.fields}>
			<SubHeading
				title="Информация о пользователе"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div>
				<Field
					{...register('name', {
						required: 'Имя не указано!',
					})}
					type="text"
					placeholder="Имя"
					error={errors.name}
				/>
				<Field
					{...register('surname', {
						required: 'Фамилия не указана!',
					})}
					type="text"
					placeholder="Фамилия"
					error={errors.surname}
				/>
			</div>
			<SubHeading
				title="Номер телефона"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div>
				<Field
					{...register('telephone', {
						required: 'Телефон не указан',
					})}
					type="number"
					placeholder="Телефон"
					error={errors.telephone}
				/>
			</div>
			<SubHeading
				title="Роль"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div>
				<Controller
					name="role"
					control={control}
					rules={{
						required: 'Пожалуйста выберите роль!',
					}}
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							error={error}
							field={field}
							placeholder="Роль"
							options={roles || []}
							isLoading={isRoleLoading}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default UserFiledList
