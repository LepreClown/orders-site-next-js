import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './AdminQuantity.module.scss'

type QuantityProps = {
	quantity?: number
}

const AdminQuantity: FC<QuantityProps> = ({ quantity }) => {
	const { asPath } = useRouter()
	const name = asPath.includes('users')
		? 'пользователей'
		: asPath.includes('building')
		? 'объектов'
		: 'заявок'

	if (!quantity) return null

	return (
		<div className={styles.quantity}>
			<span>{`Всего : ${quantity ? quantity : ''} ${name}`}</span>
		</div>
	)
}

export default AdminQuantity
