import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { ISystemEditInput } from '@/screens/admin/system/system-edit-interface'
import { useSystemEdit } from '@/screens/admin/system/useSystemEdit'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/button/Button'
import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const SystemEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState,
		setValue,
		control,
		formState: { errors },
	} = useForm<ISystemEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useSystemEdit(setValue)

	return (
		<Meta title="Редактирование статуса">
			<AdminNavigation />
			<Heading title="Редактирование статуса" />
			{isLoading ? (
				<SkeletonLoader count={1} className={formStyles.form} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.formUser}>
					<div className={formStyles.fieldsUser}>
						<Field
							{...register('system_name', {
								required: 'Система не указана!',
							})}
							placeholder="Название система"
							error={errors.system_name}
							style={{ width: '49%' }}
						/>
					</div>
					<Button>Обновить</Button>
				</form>
			)}
		</Meta>
	)
}

export default SystemEdit
