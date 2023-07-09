import cn from 'classnames'
import { forwardRef } from 'react'

import { IField } from './form-auth-elements.interface'
import styles from './form.auth.module.scss'

const FieldAuth = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	},
)

FieldAuth.displayName = 'FieldAuth'

export default FieldAuth
