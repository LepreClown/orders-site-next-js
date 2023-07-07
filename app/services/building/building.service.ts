import axios from 'api/interceptors'

import { IBuildingEditInput } from '@/screens/admin/building/building-edit-interface'

import { IBuilding } from '@/shared/types/building.types'

import { getBuildingsUrl } from '../../config/api.config'

export const BuildingService = {
	async getAll(page: number, search_by_building_name?: string) {
		const searchTerm = search_by_building_name ? { search_by_building_name } : {}
		const pageCount = search_by_building_name ? 0 : page
		return axios.get<IBuilding>(
			getBuildingsUrl(`?on_page=${7}&page=${pageCount ? pageCount : 0}`),
			{
				params: searchTerm,
			},
		)
	},

	async getBuildings() {
		return axios.get<IBuilding>(getBuildingsUrl(``))
	},
	async create(data: any) {
		return axios.post<string>(getBuildingsUrl('create'), data)
	},

	async update(id: number, data: any) {
		return axios.put<string>(getBuildingsUrl(`update/${id}`), data)
	},

	async getById(id: number) {
		return axios.get<IBuildingEditInput>(getBuildingsUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getBuildingsUrl(`delete/${id}`))
	},
}
