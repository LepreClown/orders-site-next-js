import axios from 'api/interceptors'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'

import { IOrder } from '@/shared/types/orders.types'

import { getOrderUrl } from '../../config/url.config'

export const OrderService = {
	async getAll(page: number, search_by_material?: string) {
		const searchTerm = search_by_material ? { search_by_material } : {}
		const pageCount = search_by_material ? 0 : page
		return axios.get<IOrder>(getOrderUrl(`?on_page=${7}&page=${pageCount ? pageCount : 0}`), {
			params: searchTerm,
		})
	},
	async getAllHome(page: number, search_by_material?: string) {
		const searchTerm = search_by_material ? { search_by_material } : {}
		const pageCount = search_by_material ? 0 : page
		return axios.get<IOrder>(getOrderUrl(`?on_page=${10}&page=${pageCount ? pageCount : 0}`), {
			params: searchTerm,
		})
	},

	async getOrders() {
		return axios.get<IOrder>(getOrderUrl(``))
	},
	async getTest() {
		return axios.get<IOrder[]>('https://628a7dd25da6ddfd5d6407fd.mockapi.io/items')
	},

	/*ADMIN */
	async create(data: any) {
		return axios.post<string>(getOrderUrl('create'), data)
	},
	async update(id: number, data: any) {
		return axios.put<string>(getOrderUrl(`update/${id}`), data)
	},
	async getById(id: number) {
		return axios.get<IOrderEditInput>(getOrderUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getOrderUrl(`delete/${id}`))
	},
}
