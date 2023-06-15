import cn from 'classnames'
import { FC } from 'react'

import { IButton } from './button.interface'
import styles from './button.module.scss'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
