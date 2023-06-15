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

	const { searchTerm, handleSearch, onSubmit, data, isLoading, deleteAsync, createAsync } =
		useImportant()

	const { isShow, toggle } = useModal()

	return (
		<Meta title="Срочности">
			<AdminNavigation />
			<Heading title="Срочности" />
			<AdminHeader
				title="срочность"
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				toggle={toggle}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['№', 'Название срочности']}
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
								style={{ width: '31%' }}
							/>
						</div>
						<Button>Создать</Button>
					</form>
				</Modal>
			)}
		</Meta>
	)
}

export default ImportantList
