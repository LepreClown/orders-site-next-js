import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IOrderCreate } from '@/screens/admin/orders/orders.interface'
import HomeFieldList from '@/screens/home/HomeFieldList'
import { IOrderHomeFields } from '@/screens/home/home.interface'
import { useBuildingList } from '@/screens/home/useBuildingList'
import { useHome } from '@/screens/home/useHome'
import { useImportantList } from '@/screens/home/useImportantList'
import { useStatusList } from '@/screens/home/useStatusList'
import { useSystemList } from '@/screens/home/useSystemList'

import Button from '@/ui/button/Button'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import Heading from '@/ui/heading/Heading'
import Modal from '@/ui/modal/Modal'
import OrderTable from '@/ui/order/OrderTable'
import Pagination from '@/ui/pagination/Pagination'

import { useModal } from '@/hooks/useModal'
import { useRedirect } from '@/hooks/useRedirect'

import Meta from '@/utils/meta/Meta'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})
const Home: FC = () => {
	useRedirect()
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
		createStatus,
		onPageChange,
		currentPage,
		ordersData,
		quantityOrders,
		isLoading,
	} = useHome()

	const { toggle, isShow } = useModal()

	const { data: importants, isLoading: isImportantsLoading } = useImportantList()
	const { data: building, isLoading: isBuildingsLoading } = useBuildingList()
	const { data: systems, isLoading: isSystemsLoading } = useSystemList()
	const { data: statuses, isLoading: isStatusLoading } = useStatusList()

	const dataFields: IOrderHomeFields = {
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

	const handleClick = () => {
		window.scroll(0, 0)
		toggle()
	}
	return (
		<Meta
			title="Заявки"
			description="Создай заявку и будь уверен, что ее выполнят в кротчайшие сроки">
			<Heading title="Ваши заявки" className="mb-6 text-3xl" />
			<Button
				onClick={handleClick}
				className="btn-primary text-gray-950 dark:text-white font-semibold px-10 py-2 mb-8 ">
				Создать заявку
			</Button>
			<OrderTable orders={ordersData || []} isLoading={isLoading} />
			<Pagination
				items={ordersData ? ordersData.length : 0}
				currentPage={currentPage}
				quantity={quantityOrders}
				onPageChange={onPageChange}
			/>
			{isShow && (
				<Modal toggle={toggle} title="заявки">
					<form onSubmit={handleSubmit(onSubmit)} className={formStyles.formCreate}>
						<HomeFieldList {...dataFields} />
						<Button type="submit" disabled={createStatus === 'loading'}>
							Создать
						</Button>
					</form>
				</Modal>
			)}
		</Meta>
	)
}

export default Home
