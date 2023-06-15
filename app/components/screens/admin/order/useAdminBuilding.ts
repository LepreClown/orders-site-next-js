import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { BuildingService } from '@/services/building/building.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useAdminBuilding = () => {
	const queryData = useQuery('list of building', () => BuildingService.getBuildings(), {
		select: ({ data }) =>
			data.buildings.map(
				(building): IOption => ({
					label: building.building_name,
					value: building.id,
				}),
			),
		onError(error) {
			toastError(error, 'Ошибка при получение списка объектов')
		},
	})

	return queryData
}
