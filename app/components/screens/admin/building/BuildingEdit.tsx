import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IBuildingEditInput } from '@/screens/admin/building/building-edit-interface'
import { useBuildingEdit } from '@/screens/admin/building/useBuildingEdit'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/button/Button'
import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const BuildingEdit: FC = () => {
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = useForm<IBuildingEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useBuildingEdit(setValue)

	return (
		<Meta title="Редактирование объекта">
			<AdminNavigation />
			<Heading title="Редактирование объекта" />
			{isLoading ? (
				<div className="mt-12">
					<SkeletonLoader count={2} className="mb-12" height={24} width={400} />
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<div className={formStyles.fields}>
						<SubHeading
							title="Объект"
							className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
						/>
						<Field
							{...register('building_name', {
								required: 'Объект не указан!',
							})}
							type="text"
							placeholder="Название объекта"
							error={errors.building_name}
							style={{ width: '49%' }}
						/>
					</div>
					<Button type="submit">Обновить</Button>
				</form>
			)}
		</Meta>
	)
}

export default BuildingEdit
