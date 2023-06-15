import axios from 'api/interceptors'

import { ISystemEditInput } from '@/screens/admin/system/system-edit-interface'

import { ISystem } from '@/shared/types/system.types'

import { getSystemUrl } from '../../config/url.config'

export const SystemService = {
	async getAll() {
		return axios.get<ISystem[]>(getSystemUrl(''))
	},
	async create(data: any) {
		return axios.post<string>(getSystemUrl('create'), data)
	},
	async update(id: number, data: any) {
		return axios.put<string>(getSystemUrl(`update/${id}`), data)
	},
	async getById(id: number) {
		return axios.get<ISystemEditInput>(getSystemUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getSystemUrl(`delete/${id}`))
	},
}
