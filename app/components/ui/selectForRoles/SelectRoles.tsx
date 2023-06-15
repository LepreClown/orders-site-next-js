import { FC } from 'react'
import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import { IOptionForRoles, ISelectForRoles } from '@/ui/selectForRoles/selectRoles.interface'

import formStyles from '../form-elements/form.module.scss'

import styles from './Select.module.scss'

const animatedComponents = makeAnimated()

const SelectRoles: FC<ISelectForRoles> = ({
	placeholder,
	error,
	isMulti,
	options,
	field,
	isLoading,
}) => {
	const onChange = (newValue: OnChangeValue<IOptionForRoles, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOptionForRoles[]).map((item: IOptionForRoles) => item.value)
				: (newValue as IOptionForRoles).value,
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value)
		} else {
			return isMulti ? [] : ('' as any)
		}
	}

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					placeholder={''}
					options={options}
					value={getValue()}
					onChange={onChange}
					isMulti={isMulti}
					components={animatedComponents}
					isLoading={isLoading}
				/>
			</label>

			{error && <div className={formStyles.error}>{error.message}</div>}
		</div>
	)
}

export default SelectRoles
