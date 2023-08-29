import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import { IOrderHomeFields } from '@/screens/home/home.interface'

import FieldMaterial from '@/ui/form-elements/FieldMaterial'
import formStyles from '@/ui/form-elements/adminForm.module.scss'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})
const DynamicTextEditor = dynamic(() => import('@/ui/form-elements/TextEditor'), {
	ssr: false,
})

const HomeFieldList: FC<IOrderHomeFields> = ({
	register,
	errors,
	control,
	fields,
	removeField,
	addNewField,
	building,
	statuses,
	systems,
	importants,
	isBuildingsLoading,
	isStatusLoading,
	isSystemsLoading,
	isImportantsLoading,
}) => {
	return (
		<>
			<div className={formStyles.fieldsCreate}>
				<FieldMaterial
					control={control}
					register={register}
					errors={errors}
					fields={fields}
					removeField={removeField}
					addNewField={addNewField}
				/>
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
			<div className={formStyles.text}>
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
								(v && stripHtml(v).result.length >= 0) || 'Описание является обязательным полем!',
						},
					}}
				/>
			</div>
		</>
	)
}

export default HomeFieldList
