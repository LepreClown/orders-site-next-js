import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IStatusEditInput } from '@/screens/admin/status/status-edit-interface'
import { useStatusEdit } from '@/screens/admin/status/useStatusEdit'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/button/Button'
import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const StatusEdit: FC = () => {
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = useForm<IStatusEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useStatusEdit(setValue)

	return (
		<Meta title="Редактирование статуса">
			<AdminNavigation />
			<Heading title="Редактирование статуса" />
			{isLoading ? (
				<div className="mt-12">
					<SkeletonLoader count={2} className="mb-12" height={24} width={400} />
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<SubHeading
							title="Статус"
							className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
						/>
						<Field
							{...register('status_name', {
								required: 'Статус не указана!',
							})}
							type="text"
							placeholder="Название статуса"
							error={errors.status_name}
							style={{ width: '49%' }}
						/>
					</div>
					<Button type="submit">Обновить</Button>
				</form>
			)}
		</Meta>
	)
}

export default StatusEdit
