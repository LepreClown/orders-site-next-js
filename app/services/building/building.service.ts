import axios from 'api/interceptors'

import { IBuildingEditInput } from '@/screens/admin/building/building-edit-interface'

import { IBuilding } from '@/shared/types/building.types'

import { getBuildingUrl } from '../../config/url.config'

export const BuildingService = {
	async getAll(page: number, search_by_building_name?: string) {
		const searchTerm = search_by_building_name ? { search_by_building_name } : {}
		const pageCount = search_by_building_name ? 0 : page
		return axios.get<IBuilding>(
			getBuildingUrl(`?on_page=${10}&page=${pageCount ? pageCount : 0}`),
			{
				params: searchTerm,
			},
		)
	},

	async getBuildings() {
		return axios.get<IBuilding>(getBuildingUrl(``))
	},
	async create(data: any) {
		return axios.post<string>(getBuildingUrl('create'), data)
	},

	async update(id: number, data: any) {
		return axios.put<string>(getBuildingUrl(`update/${id}`), data)
	},

	async getById(id: number) {
		return axios.get<IBuildingEditInput>(getBuildingUrl(`${id}`))
	},

	async delete(id: number) {
		return axios.delete<string>(getBuildingUrl(`delete/${id}`))
	},
}
