import { FC } from 'react'

import Button from '@/ui/button/Button'

import styles from './AdminModalButton.module.scss'

const AdminModalButton: FC<{
	toggle: () => void
	title?: string
}> = ({ title, toggle }) => {
	return (
		<Button className={styles.button} onClick={toggle}>{`Создать ${title ? title : ''}`}</Button>
	)
}

export default AdminModalButton
