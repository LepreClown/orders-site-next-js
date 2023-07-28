import { FC } from 'react'
import { useForm } from 'react-hook-form'

import OrdersAdminFieldList from '@/screens/admin/orders/OrdersAdminFieldList'
import { IOrderCreate, IOrdersFields } from '@/screens/admin/orders/orders.interface'
import { useAdminBuilding } from '@/screens/admin/orders/useAdminBuilding'
import { useAdminImportant } from '@/screens/admin/orders/useAdminImportant'
import { useAdminStatus } from '@/screens/admin/orders/useAdminStatus'
import { useAdminSystem } from '@/screens/admin/orders/useAdminSystem'
import { useAdminUsers } from '@/screens/admin/orders/useAdminUsers'
import { useOrders } from '@/screens/admin/orders/useOrders'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Button from '@/ui/button/Button'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import Modal from '@/ui/modal/Modal'
import Pagination from '@/ui/pagination/Pagination'

import { useModal } from '@/hooks/useModal'

import Meta from '@/utils/meta/Meta'

const OrdersList: FC = () => {
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm<IOrderCreate>({
		mode: 'onChange',
	})

	const {
		onSubmit,
		currentPage,
		onPageChange,
		handleSearch,
		isLoading,
		searchTerm,
		ordersData,
		quantityOrders,
		createStatus,
		deleteAsync,
	} = useOrders()

	const { isShow, toggle } = useModal()

	const { data: importants, isLoading: isImportantsLoading } = useAdminImportant()
	const { data: building, isLoading: isBuildingsLoading } = useAdminBuilding()
	const { data: systems, isLoading: isSystemsLoading } = useAdminSystem()
	const { data: users, isLoading: isUsersLoading } = useAdminUsers()
	const { data: statuses, isLoading: isStatusLoading } = useAdminStatus()

	const dataFields: IOrdersFields = {
		errors,
		register,
		control,
		importants,
		users,
		isUsersLoading,
		building,
		systems,
		statuses,
		isImportantsLoading,
		isBuildingsLoading,
		isSystemsLoading,
		isStatusLoading,
	}

	return (
		<Meta title="Заявки">
			<AdminNavigation />
			<Heading title="Заявки" />
			<AdminHeader
				quantity={quantityOrders}
				toggle={toggle}
				title="заявку"
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			{/* TODO: в headersItems передавать данные из useQuery */}
			<AdminTable
				tableItems={ordersData || []}
				headerItems={['Дата создания', 'Создатель', 'Объект', 'Материал', 'Количество']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
			<Pagination
				items={ordersData ? ordersData.length : 0}
				currentPage={currentPage}
				onPageChange={onPageChange}
				quantity={quantityOrders}
				isAdminPage
			/>
			{isShow && (
				<Modal toggle={toggle} title="заявки">
					<form onSubmit={handleSubmit(onSubmit)} className={formStyles.formCreate}>
						<OrdersAdminFieldList {...dataFields} />
						<Button type="submit" disabled={createStatus === 'loading'}>
							Создать
						</Button>
					</form>
				</Modal>
			)}
		</Meta>
	)
}

export default OrdersList
