import axios from 'api/interceptors'

import { IImportantEditInput } from '@/screens/admin/important/important-edit-interface'

import { IImportant } from '@/shared/types/important.types'

import { getImportantUrl } from '../../config/url.config'

export const ImportantService = {
	async getAll() {
		return axios.get<IImportant[]>(getImportantUrl(''))
	},

	async create(data: any) {
		return axios.post<string>(getImportantUrl('create'), data)
	},

	async update(id: number, data: any) {
		return axios.put<string>(getImportantUrl(`update/${id}`), data)
	},

	async getById(id: number) {
		return axios.get<IImportantEditInput>(getImportantUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getImportantUrl(`delete/${id}`))
	},
}
