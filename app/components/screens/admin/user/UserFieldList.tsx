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
			<Field
				{...register('name', {
					required: 'Имя не указано!',
				})}
				placeholder="Имя"
				error={errors.name}
				style={{ width: '31%' }}
			/>
			<Field
				{...register('surname', {
					required: 'Фамилия не указана!',
				})}
				placeholder="Фамилия"
				error={errors.surname}
				style={{ width: '31%' }}
			/>
			<SubHeading
				title="Номер телефона"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<Field
				{...register('telephone', {
					required: 'Телефон не указан',
				})}
				placeholder="Телефон"
				error={errors.telephone}
				style={{ width: '31%' }}
			/>
			<SubHeading
				title="Роль"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div style={{ width: '31%' }}>
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
