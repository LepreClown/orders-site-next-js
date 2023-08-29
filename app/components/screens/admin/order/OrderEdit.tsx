import React, { FC } from 'react'

import OrderAdminFieldList from '@/screens/admin/order/OrderAdminFieldList'
import { IOrderEditFields } from '@/screens/admin/order/order-edit-interface'
import { useAdminBuilding } from '@/screens/admin/order/useAdminBuilding'
import { useAdminImportant } from '@/screens/admin/order/useAdminImportant'
import { useAdminStatus } from '@/screens/admin/order/useAdminStatus'
import { useAdminSystem } from '@/screens/admin/order/useAdminSystem'
import { useOrderEdit } from '@/screens/admin/order/useOrderEdit'

import formStyles from '@/components/ui/form-elements/adminForm.module.scss'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const OrderEdit: FC = () => {
	const {
		isLoading,
		onSubmit,
		removeField,
		addNewField,
		handleSubmit,
		fields,
		control,
		formState,
		register,
	} = useOrderEdit()
	const { data: importants, isLoading: isImportantsLoading } = useAdminImportant()
	const { data: building, isLoading: isBuildingsLoading } = useAdminBuilding()
	const { data: systems, isLoading: isSystemsLoading } = useAdminSystem()
	const { data: statuses, isLoading: isStatusLoading } = useAdminStatus()

	const dataFields: IOrderEditFields = {
		errors: formState.errors,
		register,
		control,
		importants,
		building,
		systems,
		removeField,
		addNewField,
		fields,
		statuses,
		isImportantsLoading,
		isBuildingsLoading,
		isSystemsLoading,
		isStatusLoading,
	}

	return (
		<Meta title="Редактирование заявки">
			<AdminNavigation />
			<Heading title="Редактирование заявки" />
			{isLoading ? (
				<div className="mt-12">
					<SkeletonLoader count={4} className="mb-12" height={92} />
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
					<OrderAdminFieldList {...dataFields} />
					<Button aria-label="update data" type="submit">
						Обновить данные
					</Button>
				</form>
			)}
		</Meta>
	)
}

export default OrderEdit
