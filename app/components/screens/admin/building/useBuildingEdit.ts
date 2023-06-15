import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IBuildingEditInput } from '@/screens/admin/building/building-edit-interface'

import { BuildingService } from '@/services/building/building.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '../../../../config/url.config'

export const useBuildingEdit = (setValue: UseFormSetValue<IBuildingEditInput>) => {
	const { push, query } = useRouter()

	const buildingId = Number(query.id)

	const { isLoading } = useQuery(
		['building', buildingId],
		() => BuildingService.getById(buildingId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Ошибка при получение объекта')
			},
			enabled: !!query.id,
		},
	)

	const { mutateAsync } = useMutation(
		'update building',
		(data: IBuildingEditInput) =>
			BuildingService.update(buildingId, {
				building_name: data.building_name,
			}),
		{
			onSuccess: () => {
				toastr.success('Обновление объекта', 'Объект был успешно обновлен')
				push(getAdminUrl('buildings'))
			},
			onError(error) {
				toastError(error, 'Ошибка при обновление объекта')
			},
		},
	)

	const onSubmit: SubmitHandler<IBuildingEditInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
