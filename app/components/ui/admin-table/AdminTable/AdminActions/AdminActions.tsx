import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/icons/MaterialIcon'

import styles from './AdminActions.module.scss'

interface IAdminActions {
	editUrl: string
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()
	const removeHandlerClick = () => {
		if (confirm('Вы точно хотите удалить данный объект?')) {
			removeHandler()
		}
	}
	return (
		<div className={styles.actions}>
			<button aria-label="edit " onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button aria-label="close" onClick={removeHandlerClick}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	)
}

export default AdminActions
