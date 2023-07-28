import axios from 'api/interceptors'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'

import { IOrder } from '@/shared/types/orders.types'

import { getOrdersUrl } from '../../config/api.config'

export const OrderService = {
	async getAll(page: number, orderBy: string, search_by_material?: string) {
		const searchTerm = search_by_material ? { search_by_material } : {}
		const pageCount = search_by_material ? 0 : page
		const orderByField = orderBy ? orderBy : '-created_at'

		return axios.get<IOrder>(
			getOrdersUrl(
				`?on_page=${7}&page=${pageCount ? pageCount : 0}&order_by_field=${orderByField}`,
			),
			{
				params: searchTerm,
			},
		)
	},
	async getAllHome(page: number, search_by_material?: string) {
		const searchTerm = search_by_material ? { search_by_material } : {}
		const pageCount = search_by_material ? 0 : page
		return axios.get<IOrder>(getOrdersUrl(`?on_page=${10}&page=${pageCount ? pageCount : 0}`), {
			params: searchTerm,
		})
	},

	async getOrders() {
		return axios.get<IOrder>(getOrdersUrl(``))
	},
	async getFreshOrders() {
		return axios.get<IOrder>(getOrdersUrl(`?on_page=4&page=0&order_by_field=-created_at`))
	},

	/*ADMIN */
	async create(data: any) {
		return axios.post<string>(getOrdersUrl('create'), data)
	},
	async update(id: number, data: any) {
		return axios.put<string>(getOrdersUrl(`update/${id}`), data)
	},
	async getById(id: number) {
		return axios.get<IOrderEditInput>(getOrdersUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getOrdersUrl(`delete/${id}`))
	},
}
