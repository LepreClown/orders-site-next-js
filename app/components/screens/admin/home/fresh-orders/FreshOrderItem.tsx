import Link from 'next/link'
import { FC } from 'react'

import { IOrderElement } from '@/shared/types/orders.types'

import { convertDateToTimeAgo } from '@/utils/date/convertDateToTimeAgo'

import { getAdminUrl } from '../../../../../config/url.config'

const FreshOrderItem: FC<{ order: IOrderElement }> = ({ order }) => {
	const d = convertDateToTimeAgo(new Date(order.created_at))

	return (
		<Link href={getAdminUrl(`order/edit/${order.id}`)}>
			<div className="flex flex-col items-center justify-center">
				<div className="flex gap-2 text-[22px] font-semibold">
					<span>{order.material}</span>
					<span>{order.quantity}</span>
				</div>
				<div className="text-[16px] font-medium text-gray-600 text-opacity-70 dark:text-opacity-100">
					{d}
				</div>
			</div>
		</Link>
	)
}

export default FreshOrderItem
