import { FC } from 'react'
import { useForm } from 'react-hook-form'

import UserFieldList from '@/screens/admin/user/UserFieldList'
import { useAdminRole } from '@/screens/admin/user/useAdminRole'
import { useUserEdit } from '@/screens/admin/user/useUserEdit'
import { IUserEditInput, IUserFields } from '@/screens/admin/user/user-edit.interface'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/button/Button'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const UserEdit: FC = () => {
	const {
		handleSubmit,
		register,
		setValue,
		control,
		formState: { errors },
	} = useForm<IUserEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit, data } = useUserEdit(setValue)
	const { data: roles, isLoading: isRoleLoading } = useAdminRole()

	const dataFields: IUserFields = {
		errors,
		register,
		control,
		roles,
		isRoleLoading,
	}
	return (
		<Meta title="Редактирование пользователя">
			<AdminNavigation />
			<Heading title="Редактирование пользователя" />
			{isLoading ? (
				<SkeletonLoader count={5} className={formStyles.form} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<UserFieldList {...dataFields} />
					<Button>Обновить</Button>
				</form>
			)}
		</Meta>
	)
}

export default UserEdit
