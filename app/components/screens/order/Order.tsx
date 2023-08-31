import React, { FC } from 'react'

import OrderUser from '@/screens/order/OrderUser'
import OrderAdvanced from '@/screens/order/orderAdvanced/OrderAdvanced'

import Heading from '@/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'
import { useRedirect } from '@/hooks/useRedirect'

import Meta from '@/utils/meta/Meta'

const Order: FC = () => {
	useRedirect()
	const { user } = useAuth()
	if (!user) {
		return null
	}
	return (
		<Meta title="Заявка">
			<Heading title="Заявка" />
			{user.role === 'admin' || user.role === 'advanced_user' ? <OrderAdvanced /> : <OrderUser />}
		</Meta>
	)
}

export default Order
