import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IImportantEditInput } from '@/screens/admin/important/important-edit-interface'
import { useImportantEdit } from '@/screens/admin/important/useImportantEdit'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/button/Button'
import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const ImportantEdit: FC = () => {
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = useForm<IImportantEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useImportantEdit(setValue)

	return (
		<Meta title="Редактирование срочности">
			<AdminNavigation />
			<Heading title="Редактирование срочности" />
			{isLoading ? (
				<div className="mt-12">
					<SkeletonLoader count={2} className="mb-12" height={24} width={400} />
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<SubHeading
							title="Срочность"
							className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
						/>
						<Field
							{...register('important_name', {
								required: 'Срочность не указана!',
							})}
							type="text"
							placeholder="Название срочности"
							error={errors.important_name}
						/>
					</div>
					<Button type="submit">Обновить</Button>
				</form>
			)}
		</Meta>
	)
}

export default ImportantEdit
