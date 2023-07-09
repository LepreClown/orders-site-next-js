import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useAdminRole } from '@/screens/admin/user/useAdminRole'
import { useUsers } from '@/screens/admin/users/useUsers'
import { IUserCreate } from '@/screens/admin/users/users.interface'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Button from '@/ui/button/Button'
import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import Modal from '@/ui/modal/Modal'
import Pagination from '@/ui/pagination/Pagination'

import { useModal } from '@/hooks/useModal'

import Meta from '@/utils/meta/Meta'

const DynamicSelect = dynamic(() => import('@/ui/selectForRoles/SelectRoles'), {
	ssr: false,
})

const UserList: FC = () => {
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm<IUserCreate>({
		mode: 'onChange',
	})

	const {
		onSubmit,
		currentPage,
		onPageChange,
		createStatus,
		handleSearch,
		quantityUsers,
		dataUsers,
		isLoading,
		deleteAsync,
		searchTerm,
	} = useUsers()

	const { data: roles, isLoading: isRoleLoading } = useAdminRole()
	const { isShow, toggle } = useModal()

	return (
		<Meta title="Пользователи">
			<AdminNavigation />
			<Heading title="Пользователи" />
			<AdminHeader
				quantity={quantityUsers}
				toggle={toggle}
				title="пользователя"
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<AdminTable
				tableItems={dataUsers || []}
				headerItems={['Номер телефона', 'Имя', 'Фамилия', 'Роль', 'Дата создания']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
			<Pagination
				items={dataUsers ? dataUsers.length : 0}
				currentPage={currentPage}
				onPageChange={onPageChange}
				quantity={quantityUsers}
			/>
			{isShow && (
				<Modal toggle={toggle} title="пользователя">
					<form onSubmit={handleSubmit(onSubmit)} className={formStyles.formCreate}>
						<div className={formStyles.fieldsCreate}>
							<Field
								{...register('telephone', {
									required: 'Телефон не указан',
								})}
								type="number"
								placeholder="Телефон"
								error={errors.telephone}
							/>
							<Field
								{...register('name', {
									required: 'Имя не указано!',
								})}
								type="text"
								placeholder="Имя"
								error={errors.name}
							/>
							<Field
								{...register('password', {
									required: 'Пароль не указан!',
								})}
								type="password"
								placeholder="Пароль"
								error={errors.password}
							/>

							<Field
								{...register('surname', {
									required: 'Фамилия не указана!',
								})}
								type="text"
								placeholder="Фамилия"
								error={errors.surname}
							/>

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
						<Button type="submit" disabled={createStatus === 'loading'}>
							Создать
						</Button>
					</form>
				</Modal>
			)}
		</Meta>
	)
}

export default UserList
