import axios from 'api/interceptors'

import { IImportantEditInput } from '@/screens/admin/important/important-edit-interface'

import { IImportant } from '@/shared/types/important.types'

import { getImportantsUrl } from '../../config/api.config'

export const ImportantService = {
	async getAll() {
		return axios.get<IImportant[]>(getImportantsUrl(''))
	},

	async create(data: any) {
		return axios.post<string>(getImportantsUrl('create'), data)
	},

	async update(id: number, data: any) {
		return axios.put<string>(getImportantsUrl(`update/${id}`), data)
	},

	async getById(id: number) {
		return axios.get<IImportantEditInput>(getImportantsUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getImportantsUrl(`delete/${id}`))
	},
}
