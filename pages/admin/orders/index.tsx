import OrdersList from '@/screens/admin/orders/OrdersList'

import { NextPageAuth } from '@/shared/types/auth.types'

const OrderListPage: NextPageAuth = () => {
	return <OrdersList />
}

OrderListPage.isOnlyAdmin = 'admin'

export default OrderListPage
