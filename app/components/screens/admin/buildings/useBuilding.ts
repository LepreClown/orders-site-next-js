import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IBuildingCreate } from '@/screens/admin/buildings/buildings.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { BuildingService } from '@/services/building/building.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '../../../../config/url.config'

export const useBuilding = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push } = useRouter()

	const queryData = useQuery(
		['building list', debouncedSearch, currentPage],
		() => BuildingService.getAll(currentPage - 1, debouncedSearch),
		{
			select: ({ data }) => data,
			onError(error) {
				toastError(error, 'Список объектов')
			},
		},
	)

	const buildingsData = queryData.isSuccess
		? queryData.data.buildings.map((building, index) => ({
				id: building.id,
				editUrl: getAdminUrl(`building/edit/${building.id}`),
				items: [String(index + 1), building.building_name],
		  }))
		: []

	const quantityBuildings = Number(queryData.data?.quantity_buildings)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete building',
		(id: number) => BuildingService.delete(id),
		{
			onError(error) {
				toastError(error, 'Объект не удален')
			},
			onSuccess({ data: id }) {
				toastr.success('Объект', 'Объект успешно удален')
				queryData.refetch()
			},
		},
	)

	const { mutateAsync: createAsync, status: createStatus } = useMutation(
		'create building',
		(data: IBuildingCreate) =>
			BuildingService.create({
				building_name: data.building_name,
			}),
		{
			onError(error) {
				toastError(error, 'Объект не создан')
			},
			onSuccess({ data: id }) {
				toastr.success('Объект', 'Объект успешно создан')
				push(getAdminUrl('buildings'))
			},
		},
	)
	const onSubmit: SubmitHandler<IBuildingCreate> = async (data) => {
		await createAsync(data)
	}
	const onPageChange = (page: number) => {
		setCurrentPage(page)
	}

	return useMemo(
		() => ({
			deleteAsync,
			handleSearch,
			createAsync,
			onSubmit,
			createStatus,
			buildingsData,
			quantityBuildings,
			searchTerm,
			currentPage,
			onPageChange,
			...queryData,
		}),
		[queryData, searchTerm, createStatus, buildingsData, deleteAsync, createAsync, handleSearch],
	)
}
