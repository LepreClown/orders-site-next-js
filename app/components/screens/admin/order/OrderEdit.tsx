import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import OrderAdminFieldList from '@/screens/admin/order/OrderAdminFieldList'
import { IOrderEditFields, IOrderEditInput } from '@/screens/admin/order/order-edit-interface'
import { useAdminBuilding } from '@/screens/admin/order/useAdminBuilding'
import { useAdminImportant } from '@/screens/admin/order/useAdminImportant'
import { useAdminSystem } from '@/screens/admin/order/useAdminSystem'
import { useOrderEdit } from '@/screens/admin/order/useOrderEdit'
import { useAdminStatus } from '@/screens/admin/order/useAdminStatus'

import formStyles from '@/components/ui/form-elements/adminForm.module.scss'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Meta from '@/utils/meta/Meta'

const OrderEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IOrderEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useOrderEdit(setValue)
	const { data: importants, isLoading: isImportantsLoading } = useAdminImportant()
	const { data: building, isLoading: isBuildingsLoading } = useAdminBuilding()
	const { data: systems, isLoading: isSystemsLoading } = useAdminSystem()
	const { data: statuses, isLoading: isStatusLoading } = useAdminStatus()

	const dataFields: IOrderEditFields = {
		errors,
		register,
		control,
		importants,
		building,
		systems,
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
					<Button type="submit">Обновить данные</Button>
				</form>
			)}
		</Meta>
	)
}

export default OrderEdit
