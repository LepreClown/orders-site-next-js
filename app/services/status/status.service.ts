import axios from 'api/interceptors'

import { IStatusEditInput } from '@/screens/admin/status/status-edit-interface'

import { IStatus } from '@/shared/types/status.types'

import { getStatusUrl } from '../../config/url.config'

export const StatusService = {
	async getAll() {
		return axios.get<IStatus[]>(getStatusUrl(''))
	},

	async create(data: any) {
		return axios.post<string>(getStatusUrl('create'), data)
	},
	async update(id: number, data: any) {
		return axios.put<string>(getStatusUrl(`update/${id}`), data)
	},
	async getById(id: number) {
		return axios.get<IStatusEditInput>(getStatusUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getStatusUrl(`delete/${id}`))
	},
}
