import { useQuery } from 'react-query'

import { BuildingService } from '@/services/building/building.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useStatisticsBuildings = () => {
	return useQuery(['building count'], () => BuildingService.getBuildings(), {
		select: ({ data }) => data.quantity_buildings,
		onError(error) {
			toastError(error, 'Список объектов')
		},
	})
}
