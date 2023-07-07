import axios from 'api/interceptors'

import { IStatusEditInput } from '@/screens/admin/status/status-edit-interface'

import { IStatus } from '@/shared/types/status.types'

import { getStatusesUrl } from '../../config/api.config'

export const StatusService = {
	async getAll() {
		return axios.get<IStatus[]>(getStatusesUrl(''))
	},

	async create(data: any) {
		return axios.post<string>(getStatusesUrl('create'), data)
	},
	async update(id: number, data: any) {
		return axios.put<string>(getStatusesUrl(`update/${id}`), data)
	},
	async getById(id: number) {
		return axios.get<IStatusEditInput>(getStatusesUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getStatusesUrl(`delete/${id}`))
	},
}
