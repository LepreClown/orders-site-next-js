import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { ISystemEditInput } from '@/screens/admin/system/system-edit-interface'
import { useSystemEdit } from '@/screens/admin/system/useSystemEdit'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/button/Button'
import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const SystemEdit: FC = () => {
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = useForm<ISystemEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useSystemEdit(setValue)

	return (
		<Meta title="Редактирование системы">
			<AdminNavigation />
			<Heading title="Редактирование системы" />
			{isLoading ? (
				<div className="mt-12">
					<SkeletonLoader count={2} className="mb-12" height={24} width={400} />
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<SubHeading
							title="Система"
							className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
						/>
						<Field
							{...register('system_name', {
								required: 'Система не указана!',
							})}
							type="text"
							placeholder="Название системы"
							error={errors.system_name}
							style={{ width: '49%' }}
						/>
					</div>
					<Button type="submit">Обновить</Button>
				</form>
			)}
		</Meta>
	)
}

export default SystemEdit
