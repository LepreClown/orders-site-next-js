import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import OrderAdminFieldList from '@/screens/order/orderAdvanced/OrderAdvancedFieldList'
import {
	IOrderEditFieldsAdvanced,
	IOrderEditInputAdvanced,
} from '@/screens/order/orderAdvanced/order-advanced-edit-interface'
import { useAdvancedBuilding } from '@/screens/order/orderAdvanced/useAdvancedBuilding'
import { useAdvancedImportant } from '@/screens/order/orderAdvanced/useAdvancedImportant'
import { useAdvancedOrderEdit } from '@/screens/order/orderAdvanced/useAdvancedOrderEdit'
import { useAdvancedStatus } from '@/screens/order/orderAdvanced/useAdvancedStatus'
import { useAdvancedSystem } from '@/screens/order/orderAdvanced/useAdvancedSystem'

import Button from '@/ui/button/Button'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

const Order: FC = () => {
	const {
		register,
		control,
		formState: { errors },
		setValue,
		handleSubmit,
	} = useForm<IOrderEditInputAdvanced>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useAdvancedOrderEdit(setValue)
	const { data: importants, isLoading: isImportantsLoading } = useAdvancedImportant()
	const { data: building, isLoading: isBuildingsLoading } = useAdvancedBuilding()
	const { data: systems, isLoading: isSystemsLoading } = useAdvancedSystem()
	const { data: statuses, isLoading: isStatusLoading } = useAdvancedStatus()

	const dataFields: IOrderEditFieldsAdvanced = {
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
	return isLoading ? (
		<div className="mt-12">
			<SkeletonLoader count={4} className="mb-12" height={90} />
		</div>
	) : (
		<form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
			<OrderAdminFieldList {...dataFields} />
			<Button aria-label="update order" type="submit">
				Обновить заявку
			</Button>
		</form>
	)
}

export default Order
