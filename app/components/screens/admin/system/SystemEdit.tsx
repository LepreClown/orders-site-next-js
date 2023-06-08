import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IStatusEditInput } from '@/screens/admin/status/status-edit-interface'
import { useStatusEdit } from '@/screens/admin/status/useStatusEdit'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/button/Button'
import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const StatusEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState,
		setValue,
		control,
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
				<SkeletonLoader count={1} className={formStyles.form} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.formUser}>
					<div className={formStyles.fieldsUser}>
						<Field
							{...register('status_name', {
								required: 'Статус не указана!',
							})}
							placeholder="Статус"
							error={errors.status_name}
							style={{ width: '49%' }}
						/>
					</div>
					<Button>Обновить</Button>
				</form>
			)}
		</Meta>
	)
}

export default StatusEdit
