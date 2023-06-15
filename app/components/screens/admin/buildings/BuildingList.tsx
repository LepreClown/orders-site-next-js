import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IBuildingEditInput } from '@/screens/admin/building/building-edit-interface'
import { useBuilding } from '@/screens/admin/buildings/useBuilding'

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

const BuildingList: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IBuildingEditInput>({
		mode: 'onChange',
	})
	const { isShow, toggle } = useModal()
	const {
		searchTerm,
		onSubmit,
		handleSearch,
		buildingsData,
		quantityBuildings,
		currentPage,
		onPageChange,
		isLoading,
		deleteAsync,
	} = useBuilding()

	return (
		<Meta title="Объекты">
			<AdminNavigation />
			<Heading title="Объекты" />
			<AdminHeader
				toggle={toggle}
				title="объект"
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				quantity={quantityBuildings}
			/>
			<AdminTable
				tableItems={buildingsData || []}
				headerItems={['№', 'Название объекта']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
			<Pagination
				items={buildingsData ? buildingsData.length : 0}
				currentPage={currentPage}
				quantity={quantityBuildings}
				onPageChange={onPageChange}
			/>
			{isShow && (
				<Modal toggle={toggle} title="объекта">
					<form onSubmit={handleSubmit(onSubmit)} className={formStyles.formCreate}>
						<div className={formStyles.fieldsCreate}>
							<Field
								{...register('building_name', {
									required: 'Объект не указан!',
								})}
								type="text"
								placeholder="Название объкта"
								error={errors.building_name}
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

export default BuildingList
