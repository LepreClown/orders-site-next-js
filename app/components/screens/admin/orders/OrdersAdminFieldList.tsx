import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { IOrdersFields } from '@/screens/admin/orders/orders.interface'

import Field from '@/ui/form-elements/Field'
import formStyles from '@/ui/form-elements/adminForm.module.scss'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})

const OrderAdminFieldsList: FC<IOrdersFields> = ({
	register,
	errors,
	control,
	users,
	systems,
	building,
	statuses,
	importants,
	isUsersLoading,
	isBuildingsLoading,
	isStatusLoading,
	isSystemsLoading,
	isImportantsLoading,
}) => {
	return (
		<div className={formStyles.fieldsCreate}>
			<Field
				{...register('material', {
					required: 'Материал не указан',
				})}
				type="text"
				placeholder="Материал"
				error={errors.material}
				style={{ width: '31%' }}
			/>
			<Field
				{...register('quantity', {
					required: 'Количество не указано',
				})}
				type="number"
				placeholder="Количество"
				error={errors.quantity}
				style={{ width: '31%' }}
			/>
			<div style={{ width: '31%' }}>
				<Controller
					name="creator_id"
					control={control}
					rules={{
						required: 'Пожалуйста выберите пользователя!',
					}}
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							error={error}
							field={field}
							placeholder="Пользователь"
							options={users || []}
							isLoading={isUsersLoading}
						/>
					)}
				/>
			</div>
			<div style={{ width: '31%' }}>
				<Controller
					name="building_id"
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
			<div style={{ width: '31%' }}>
				<Controller
					name="status_id"
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
			<div style={{ width: '31%' }}>
				<Controller
					name="system_id"
					control={control}
					rules={{
						required: 'Пожалуйста выберите систему!',
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
			<div style={{ width: '31%' }}>
				<Controller
					name="important_id"
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
		</div>
	)
}

export default OrderAdminFieldsList
