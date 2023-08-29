import { useRouter } from 'next/router'
import { Control, SubmitHandler, UseFormSetValue, useFieldArray } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'
import { IOrderEditInputAdvanced } from '@/screens/order/orderAdvanced/order-advanced-edit-interface'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { convertDate } from '@/utils/date/convertDate'
import { convertDateTimeZone } from '@/utils/date/convertDateTimeZone'

export const useAdvancedOrderEdit = (
	setValue: UseFormSetValue<IOrderEditInputAdvanced>,
	control: Control<IOrderEditInputAdvanced, any>,
) => {
	const { push, query } = useRouter()

	const orderId = Number(query.id)

	const { isLoading } = useQuery(
		['order for advanced user', orderId],
		() => OrderService.getById(orderId),
		{
			onSuccess: ({ data }) => {
				setValue('building.id', data.building.id)
				setValue('creator.name', data.creator.name)
				setValue('creator.surname', data.creator.surname)
				setValue(
					'creator.role',
					data.creator.role === 'admin'
						? 'Администратор'
						: data.creator.role === 'user'
						? 'Пользователь'
						: 'Менеджер',
				)
				setValue('creator.telephone', data.creator.telephone)
				setValue('system.id', data.system.id)
				setValue('important.id', data.important.id)
				setValue('materials', data.materials)
				setValue('creator.id', data.creator.id)
				setValue('status.id', data.status.id)
				setValue('expected_time', data.created_at)
				setValue('modified_at', convertDateTimeZone(data.modified_at))
				setValue('description', data.description)
			},
			onError: (error) => {
				toastError(error, 'Ошибка при получение завки')
			},
			enabled: !!query.id,
		},
	)

	const { mutateAsync } = useMutation(
		'update order for advanced user',
		(data: IOrderEditInput) =>
			OrderService.update(orderId, {
				building_id: data.building.id,
				system_id: data.system.id,
				important_id: data.important.id,
				materials: data.materials.map((material) => ({
					material: material.material,
					quantity: material.quantity,
				})),
				creator_id: data.creator.id,
				status_id: data.status.id,
				expected_time: String(Date.now()),
				modified_at: convertDate(data.modified_at),
				description: data.description,
			}),
		{
			onSuccess: () => {
				toastr.success('Обновление заявки', 'Заявка была успешно обновлена')
				push('/')
			},
			onError(error) {
				toastError(error, 'Ошибка при обновление заявки')
			},
		},
	)

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'materials',
	})

	const addNewField = () => {
		append({ material: '', quantity: null })
	}
	const removeField = (index: number) => {
		remove(index)
	}

	const onSubmit: SubmitHandler<IOrderEditInputAdvanced> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading, addNewField, removeField, fields }
}
