import { AxiosResponse } from 'axios'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Control, Controller, FieldErrors, UseFormRegister } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import { IOrderEditInput } from '@/screens/admin/order/order-edit-interface'

import Field from '@/ui/form-elements/Field'
import FieldMaterial from '@/ui/form-elements/FieldMaterial'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import SubHeading from '@/ui/heading/SubHeading'

import { IMaterials } from '@/shared/types/orders.types'

export interface IOrderFields {
	register: UseFormRegister<IOrderEditInput>
	errors: FieldErrors<IOrderEditInput>
	control: Control<IOrderEditInput, any>
	order: AxiosResponse<IOrderEditInput, any> | undefined
	addNewField: () => void
	removeField: (index: number) => void
	fields: IMaterials[]
}

const DynamicTextEditor = dynamic(() => import('@/ui/form-elements/TextEditor'), {
	ssr: false,
})

const OrderFieldList: FC<IOrderFields> = ({
	register,
	fields,
	removeField,
	addNewField,
	control,
	errors,
	order,
}) => {
	return (
		<div className={formStyles.form}>
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
						type="text"
						disabled={true}
						placeholder="Имя"
						error={errors.creator?.name}
					/>
					<Field
						{...register('creator.surname', {
							required: 'Фимилия не указана',
						})}
						type="text"
						disabled={true}
						placeholder="Фамилия"
						error={errors.creator?.surname}
					/>
					<Field
						{...register('creator.telephone', {
							required: 'Телефон не указан',
						})}
						type="number"
						disabled={true}
						placeholder="Телефон"
						error={errors.creator?.telephone}
					/>
				</div>
				<SubHeading
					title="Информация о заявки"
					className="text-gray-800  dark:text-gray-300 text-opacity-80 text-[18px]"
				/>
				<FieldMaterial
					errors={errors}
					register={register}
					control={control}
					removeField={removeField}
					addNewField={addNewField}
					fields={fields}
					status={false}
				/>
				<SubHeading
					title="Информация о объекте"
					className="text-gray-800 dark:text-gray-300  text-opacity-80  text-[18px]"
				/>
				<div>
					<Field
						{...register('building.building_name', {
							required: 'Название объекта не указано',
						})}
						type="text"
						disabled={true}
						placeholder="Объект"
						error={errors.building?.building_name}
					/>
					<Field
						{...register('system.system_name', {
							required: 'Название системы не указано',
						})}
						type="text"
						disabled={true}
						placeholder="Cистема"
						error={errors.system?.system_name}
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
						type="text"
						disabled={true}
						placeholder="Важность"
						error={errors.important?.important_name}
					/>

					<Field
						{...register('status.status_name', {
							required: 'Статус не указан',
						})}
						type="text"
						placeholder="Статус"
						error={errors.status?.status_name}
						disabled={true}
					/>
				</div>
				<SubHeading
					title="Примечание"
					className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
				/>

				<Controller
					name="description"
					control={control}
					defaultValue=""
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<DynamicTextEditor
							placeholder="Описание"
							onChange={onChange}
							error={error}
							value={value}
						/>
					)}
					rules={{
						validate: {
							required: (v) =>
								(v && stripHtml(v).result.length > 0) || 'Описание является обязательным полем!',
						},
					}}
				/>
			</div>
		</div>
	)
}

export default OrderFieldList
