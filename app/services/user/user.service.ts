import axios from 'api/interceptors'

import { IUser, IUserItem } from '@/shared/types/user.types'

import { getUsersUrl } from '../../config/api.config'

export const UserService = {
	async getProfile(userId: number) {
		return axios.get<IUserItem>(getUsersUrl(`/${userId}`))
	},

	async getUsers(page: number, search_by_surname: string) {
		const searchTerm = search_by_surname ? { search_by_surname } : {}
		const pageCount = search_by_surname ? 0 : page
		//TODO: чекнуть вот это условие ${search_by_surname ? 0 : page}
		return axios.get<IUser>(getUsersUrl(`/?on_page=${7}&page=${pageCount ? pageCount : 0}`), {
			params: searchTerm,
		})
	},
	async getAll() {
		return axios.get<IUser>(getUsersUrl(`?on_page=999&page=0`))
	},
	async getFreshUsers () {
		return axios.get<IUser>(getUsersUrl(`/?on_page=4&page=0&order_by_field=-created_at`))
	},
	async getUser(userId: number) {
		return axios.get<IUserItem>(getUsersUrl(`/${userId}`))
	},
	async updateUser(userId: number, data: any) {
		return axios.put<string>(getUsersUrl(`/update/${userId}`), data)
	},
	async updatePassword(userId: number, data: any) {
		return axios.patch<string>(getUsersUrl(`/update-password/${userId}`), data)
	},
	async create(data: any) {
		return axios.post<string>(getUsersUrl('/create'), data)
	},
	async deleteUser(userId: number) {
		return axios.delete<string>(getUsersUrl(`/delete/${userId}`))
	},
}
