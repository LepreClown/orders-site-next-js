import axios from 'api/interceptors'

import { ISystemEditInput } from '@/screens/admin/system/system-edit-interface'

import { ISystem } from '@/shared/types/system.types'

import { getSystemsUrl } from '../../config/api.config'

export const SystemService = {
	async getAll(orderBy?: string) {
		const orderByField = orderBy ? orderBy : '-system_name'
		return axios.get<ISystem[]>(getSystemsUrl(`?order_by_field=${orderByField}`))
	},
	async create(data: any) {
		return axios.post<string>(getSystemsUrl('create'), data)
	},
	async update(id: number, data: any) {
		return axios.put<string>(getSystemsUrl(`update/${id}`), data)
	},
	async getById(id: number) {
		return axios.get<ISystemEditInput>(getSystemsUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getSystemsUrl(`delete/${id}`))
	},
}
