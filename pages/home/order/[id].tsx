import Order from '@/screens/order/Order'

import { NextPageAuth } from '@/shared/types/auth.types'

const OrderPage: NextPageAuth = () => {
	return <Order />
}

OrderPage.isOnlyUser = 'user'

export default OrderPage
