import { FC } from 'react'

import Button from '@/ui/button/Button'

import styles from './AdminCreateButton.module.scss'

const AdminCreateButton: FC<{
	onClick?: () => void
	title?: string
}> = ({ onClick, title }) => {
	return (
		<Button className={styles.button} onClick={onClick}>{`Создать ${title ? title : ''}`}</Button>
	)
}

export default AdminCreateButton
