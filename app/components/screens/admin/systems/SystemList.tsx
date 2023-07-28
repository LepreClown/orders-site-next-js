import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { ISystemEditInput } from '@/screens/admin/system/system-edit-interface'
import { useSystem } from '@/screens/admin/systems/useSystem'

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

const SystemList: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<ISystemEditInput>({
		mode: 'onChange',
	})

	const { onSubmit, handleSystemOrderBy, data, isLoading, deleteAsync, createStatus } = useSystem()
	const { isShow, toggle } = useModal()

	const headerItems = [
		{ name: '№', orderBy: '' },
		{ name: 'Название системы', orderBy: 'system_name' },
	]

	return (
		<Meta title="Системы">
			<AdminNavigation />
			<Heading title="Системы" />
			<AdminHeader toggle={toggle} title="система" />
			<AdminTable
				handleOrderByField={handleSystemOrderBy}
				tableItems={data || []}
				headerItems={headerItems}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
			{isShow && (
				<Modal toggle={toggle} title="системы">
					<form onSubmit={handleSubmit(onSubmit)} className={formStyles.formCreate}>
						<div className={formStyles.fieldsCreate}>
							<Field
								{...register('system_name', {
									required: 'Система не указана!',
								})}
								type="text"
								placeholder="Название системы"
								error={errors.system_name}
							/>
						</div>
						<Button aria-label="create" type="submit" disabled={createStatus === 'loading'}>
							Создать
						</Button>
					</form>
				</Modal>
			)}
		</Meta>
	)
}

export default SystemList
