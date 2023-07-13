import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IStatusEditInput } from '@/screens/admin/status/status-edit-interface'
import { useStatus } from '@/screens/admin/statuses/useStatus'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Button from '@/ui/button/Button'
import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import Modal from '@/ui/modal/Modal'

import { useModal } from '@/hooks/useModal'

import Meta from '@/utils/meta/Meta'

const UserList: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IStatusEditInput>({
		mode: 'onChange',
	})
	const { isShow, toggle } = useModal()
	const { onSubmit, createStatus, data, isLoading, deleteAsync } = useStatus()

	return (
		<Meta title="Статусы">
			<AdminNavigation />
			<Heading title="Статусы" />
			<AdminHeader toggle={toggle} title="заявку" />
			<AdminTable
				tableItems={data || []}
				headerItems={['№', 'Название статуса']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
			{isShow && (
				<Modal toggle={toggle} title="статуса">
					<form onSubmit={handleSubmit(onSubmit)} className={formStyles.formCreate}>
						<div className={formStyles.fieldsCreate}>
							<Field
								{...register('status_name', {
									required: 'Статус не указан!',
								})}
								type="text"
								placeholder="Название статуса"
								error={errors.status_name}
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
