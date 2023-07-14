import { FC } from 'react'

import styles from './Fresh-orders.module.scss'

const FreshOrderItemHeader: FC = () => {
	return (
		<div className={styles.header}>
			<span className={styles.material}>Материал</span>
			<span className={styles.quantity}>Количество</span>
			<span className={styles.date}>Время создания</span>
			<span className={styles.important}>Срочность</span>
			<span>Статус</span>
		</div>
	)
}

export default FreshOrderItemHeader
