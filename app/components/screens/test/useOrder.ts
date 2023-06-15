// import { useRouter } from 'next/router'
// import { useQuery } from 'react-query'
//
// import { OrderService } from '@/services/order/order.service'
//
// import { toastError } from '@/utils/api/withToastrErrorRedux'
// import { convertDate } from '@/utils/date/convertDate'
//
// import { getOrderUrl } from '../../../config/url.config'
//
// export const useOrder = () => {
// 	const { query } = useRouter()
//
// 	const orderId = Number(query.id)
//
// 	const { isLoading, data: order } = useQuery(
// 		['test page', orderId],
// 		() => OrderService.getById(orderId),
// 		{
// 			select: ({ data }) => ({
// 				id: data.id,
// 				editUrl: getOrderUrl(`${orderId}`),
// 				building: data.building,
// 				system: data.system,
// 				important: data.important,
// 				material: data.material,
// 				quantity: data.quantity,
// 				creator: data.creator,
// 				status: data.status,
// 				created_at: convertDate(data.created_at),
// 				modified_at: 'Date.now()',
// 				expected_time: 'Date.now()',
// 			}),
// 			onError(error) {
// 				toastError(error, 'Заявка')
// 			},
// 			enabled: !!query.id,
// 		},
// 	)
//
// 	return { isLoading, order, orderId }
// }
