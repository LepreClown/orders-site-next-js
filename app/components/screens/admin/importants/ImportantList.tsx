import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IImportantEditInput } from '@/screens/admin/important/important-edit-interface'
import { useImportant } from '@/screens/admin/importants/useImportant'

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

const ImportantList: FC = () => {
	const {
		handleSubmit,
		register,

		formState: { errors },
	} = useForm<IImportantEditInput>({
		mode: 'onChange',
	})

	const { createStatus, handleImportantOrderBy, onSubmit, data, isLoading, deleteAsync } =
		useImportant()

	const { isShow, toggle } = useModal()

	const headerItems = [
		{ name: '№', orderBy: '' },
		{ name: 'Название срочности', orderBy: 'important_name' },
	]

	return (
		<Meta title="Срочности">
			<AdminNavigation />
			<Heading title="Срочности" />
			<AdminHeader title="срочность" toggle={toggle} />
			<AdminTable
				handleOrderByField={handleImportantOrderBy}
				tableItems={data || []}
				headerItems={headerItems}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
			{isShow && (
				<Modal toggle={toggle} title="срочности">
					<form onSubmit={handleSubmit(onSubmit)} className={formStyles.formCreate}>
						<div className={formStyles.fieldsCreate}>
							<Field
								{...register('important_name', {
									required: 'Срочность не указана!',
								})}
								type="text"
								placeholder="Название срочности"
								error={errors.important_name}
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

export default ImportantList
