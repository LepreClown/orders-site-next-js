import { AxiosResponse } from 'axios'
import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'

import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import SubHeading from '@/ui/heading/SubHeading'

export interface IOrderFields {
	register: UseFormRegister<IOrderEditInput>
	errors: FieldErrors<IOrderEditInput>
	order: AxiosResponse<IOrderEditInput, any> | undefined
}

const OrderFieldList: FC<IOrderFields> = ({ register, errors, order }) => {
	return (
		<div className={formStyles.fields}>
			<SubHeading
				title="Информация о пользователе"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div>
				<Field
					{...register('creator.name', {
						required: 'Имя не указано',
					})}
					disabled={true}
					placeholder="Имя"
					error={errors.creator?.name}
					style={{ width: '31%' }}
				/>
				<Field
					{...register('creator.surname', {
						required: 'Фимилия не указана',
					})}
					disabled={true}
					placeholder="Фамилия"
					error={errors.creator?.surname}
					style={{ width: '31%' }}
				/>
				<Field
					{...register('creator.telephone', {
						required: 'Телефон не указан',
					})}
					disabled={true}
					placeholder="Телефон"
					error={errors.creator?.telephone}
					style={{ width: '31%' }}
				/>
			</div>
			<SubHeading
				title="Информация о заявки"
				className="text-gray-800  dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div>
				<Field
					{...register('material', {
						required: 'Материал не указан',
					})}
					disabled={true}
					placeholder="Материал"
					error={errors.material}
					style={{ width: '31%' }}
				/>
				<Field
					{...register('quantity', {
						required: 'Количество не указано',
					})}
					disabled={true}
					placeholder="Количество"
					error={errors.quantity}
					style={{ width: '31%' }}
				/>
			</div>
			<SubHeading
				title="Информация о объекте"
				className="text-gray-800 dark:text-gray-300  text-opacity-80  text-[18px]"
			/>
			<div>
				<Field
					{...register('building.building_name', {
						required: 'Название объекта не указано',
					})}
					disabled={true}
					placeholder="Объект"
					error={errors.building?.building_name}
					style={{ width: '31%' }}
				/>
				<Field
					{...register('system.system_name', {
						required: 'Название системы не указано',
					})}
					disabled={true}
					placeholder="Cистема"
					error={errors.system?.system_name}
					style={{ width: '31%' }}
				/>
			</div>
			<SubHeading
				title="Информация о статусе"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div>
				<Field
					{...register('important.important_name', {
						required: 'Название важности не указано',
					})}
					disabled={true}
					placeholder="Важность"
					error={errors.important?.important_name}
					style={{ width: '31%' }}
				/>

				<Field
					{...register('status.status_name', {
						required: 'Статус не указан',
					})}
					placeholder="Статус"
					error={errors.status?.status_name}
					disabled={true}
					style={{ width: '31%' }}
				/>
			</div>
		</div>
	)
}

export default OrderFieldList
