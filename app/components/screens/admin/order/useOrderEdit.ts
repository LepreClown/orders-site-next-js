import { useRouter } from 'next/router'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'

import { OrderService } from '@/services/order/order.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { convertDateTimeZone } from '@/utils/date/convertDateTimeZone'

import { getAdminUrl } from '../../../../config/url.config'

export const useOrderEdit = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IOrderEditInput>({
		mode: 'onChange',
	})

	const { push, query } = useRouter()

	const orderId = Number(query.id)

	const { isLoading, data } = useQuery(['order', orderId], () => OrderService.getById(orderId), {
		onSuccess: ({ data }) => {
			setValue('building.id', data.building.id)
			setValue('creator.surname', data.creator.surname)
			setValue('creator.name', data.creator.name)
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
	})

	const { mutateAsync } = useMutation(
		'update order',
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
				expected_time: '2023-08-28T13:15:16.240Z',
				description: data.description,
			}),
		{
			onSuccess: () => {
				toastr.success('Обновление заявки', 'Заявка была успешно обновлена')
				push(getAdminUrl('orders'))
			},
			onError(error) {
				toastError(error, 'Ошибка при обновление заявки')
			},
		},
	)
	const onSubmit: SubmitHandler<IOrderEditInput> = async (data) => {
		await mutateAsync(data)
	}
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

	return {
		onSubmit,
		isLoading,
		fields,
		removeField,
		addNewField,
		handleSubmit,
		register,
		formState: { errors },
		control,
	}
}
