import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { IOrderEditFields } from '@/screens/admin/order/order-edit-interface'

import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'
import SubHeading from '@/ui/heading/SubHeading'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})

const OrderAdminFieldList: FC<IOrderEditFields> = ({
	errors,
	register,
	control,
	importants,
	building,
	systems,
	statuses,
	isImportantsLoading,
	isBuildingsLoading,
	isSystemsLoading,
	isStatusLoading,
}) => {
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
					type="text"
					disabled={true}
					placeholder="Имя"
					error={errors.creator?.name}
					style={{ width: '21%' }}
				/>
				<Field
					{...register('creator.surname', {
						required: 'Фимилия не указана',
					})}
					type="text"
					disabled={true}
					placeholder="Фамилия"
					error={errors.creator?.surname}
					style={{ width: '21%' }}
				/>

				<Field
					{...register('creator.telephone', {
						required: 'Телефон не указан',
					})}
					type="number"
					placeholder="Телефон"
					error={errors.creator?.telephone}
					style={{ width: '21%' }}
				/>
				<Field
					{...register('creator.role', {
						required: 'Роль не указана',
					})}
					type="text"
					placeholder="Роль"
					error={errors.creator?.role}
					disabled={true}
					style={{ width: '21%' }}
				/>
			</div>
			<SubHeading
				title="Информация о заявки"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div>
				<Field
					{...register('material', {
						required: 'Материал не указан',
					})}
					type="text"
					placeholder="Материал"
					error={errors.material}
					style={{ width: '21%' }}
				/>
				<Field
					{...register('quantity', {
						required: 'Количество не указано',
					})}
					type="number"
					placeholder="Количество"
					error={errors.quantity}
					style={{ width: '21%' }}
				/>
			</div>
			<SubHeading
				title="Информация о объекте"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div>
				<div style={{ width: '21%' }}>
					<Controller
						name="building.id"
						control={control}
						rules={{
							required: 'Пожалуйста выберите объект!',
						}}
						render={({ field, fieldState: { error } }) => (
							<DynamicSelect
								error={error}
								field={field}
								placeholder="Объекты"
								options={building || []}
								isLoading={isBuildingsLoading}
							/>
						)}
					/>
				</div>

				<div style={{ width: '21%' }}>
					<Controller
						name="system.id"
						control={control}
						rules={{
							required: 'Пожалуйста выберите система!',
						}}
						render={({ field, fieldState: { error } }) => (
							<DynamicSelect
								error={error}
								field={field}
								placeholder="Система"
								options={systems || []}
								isLoading={isSystemsLoading}
							/>
						)}
					/>
				</div>
			</div>
			<SubHeading
				title="Информация о статусе"
				className="text-gray-800 dark:text-gray-300 text-opacity-80 text-[18px]"
			/>
			<div>
				<div style={{ width: '21%' }}>
					<Controller
						name="important.id"
						control={control}
						rules={{
							required: 'Пожалуйста выберите срочность заявки!',
						}}
						render={({ field, fieldState: { error } }) => (
							<DynamicSelect
								error={error}
								field={field}
								placeholder="Срочность"
								options={importants || []}
								isLoading={isImportantsLoading}
							/>
						)}
					/>
				</div>
				<div style={{ width: '21%' }}>
					<Controller
						name="status.id"
						control={control}
						rules={{
							required: 'Пожалуйста выберите статус!',
						}}
						render={({ field, fieldState: { error } }) => (
							<DynamicSelect
								error={error}
								field={field}
								placeholder="Статус"
								options={statuses || []}
								isLoading={isStatusLoading}
							/>
						)}
					/>
				</div>
			</div>
			<Field
				{...register('modified_at', {
					required: 'Время уже указана',
				})}
				disabled={true}
				type="time"
				placeholder="Время изменения"
				error={errors.modified_at}
				style={{ width: '11%' }}
			/>
		</div>
	)
}

export default OrderAdminFieldList
