import React, { FC } from 'react'
import { Control, Controller, FieldErrors, UseFormRegister } from 'react-hook-form'

import { IOrderEditFields, IOrderEditInput } from '@/screens/admin/order/order-edit-interface'
import { IOrderCreate } from '@/screens/admin/orders/orders.interface'
import { IOrderEditInputAdvanced } from '@/screens/order/orderAdvanced/order-advanced-edit-interface'

import Field from '@/ui/form-elements/Field'
import MaterialIcon from '@/ui/icons/MaterialIcon'

import { IMaterials } from '@/shared/types/orders.types'

import styles from './field-material.module.scss'

interface IFieldMaterial {
	errors: FieldErrors<IOrderEditInputAdvanced | IOrderEditInput | IOrderCreate | IOrderEditFields>
	register: UseFormRegister<
		IOrderEditInputAdvanced | IOrderEditInput | IOrderCreate | IOrderEditFields
	>
	control: Control<IOrderEditInputAdvanced | IOrderEditInput | IOrderCreate | IOrderEditFields, any>
	removeField: (index: number) => void
	addNewField: () => void
	fields: IMaterials[]
	status?: boolean
}

const FieldMaterial: FC<IFieldMaterial> = ({
	fields,
	control,
	register,
	errors,
	removeField,
	addNewField,
	status = true,
}) => {
	return (
		<div className={styles.fields}>
			{fields?.map(({ material, quantity }: IMaterials, index: number) => {
				const materialField = `materials[${index}].material` as any
				const quantityField = `materials[${index}].quantity` as any
				return (
					<div key={material} className={styles.field}>
						<Controller
							defaultValue={material}
							name={materialField}
							control={control}
							rules={{ required: 'Материал не указан' }}
							render={({ field }) => (
								<Field
									{...register(materialField, {
										required: 'Материал не указан',
									})}
									type="text"
									placeholder="Материал"
									error={errors?.materials && errors.materials[index]?.material}
								/>
							)}
						/>
						<Controller
							defaultValue={quantity}
							name={quantityField}
							control={control}
							rules={{ required: 'Количество не указано' }}
							render={() => (
								<Field
									{...register(quantityField, {
										required: 'Количество не указано',
									})}
									type="number"
									placeholder="Количество"
									error={errors?.materials && errors.materials[index]?.quantity}
								/>
							)}
						/>
						{status && (
							<div className={styles.removeBtn} onClick={() => removeField(index)}>
								<MaterialIcon name="MdClose" />
							</div>
						)}
					</div>
				)
			})}
			{status && (
				<div className={styles.addBtn} onClick={() => addNewField()}>
					<MaterialIcon name="MdAddCircle" />
				</div>
			)}
		</div>
	)
}

export default FieldMaterial
