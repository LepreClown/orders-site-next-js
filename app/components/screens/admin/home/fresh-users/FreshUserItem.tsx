import Link from 'next/link'
import { FC } from 'react'

import { IUserItem } from '@/shared/types/user.types'

import { convertDateToTimeAgo } from '@/utils/date/convertDateToTimeAgo'

import { getAdminUrl } from '../../../../../config/url.config'

import styles from './Fresh-users.module.scss'

const FreshUserItem: FC<{ user: IUserItem }> = ({ user }) => {
	const d = convertDateToTimeAgo(new Date(user.created_at))
	return (
		<Link href={getAdminUrl(`user/edit/${user.id}`)}>
			<div className={styles.params}>
				<div className={styles.name}>
					<span>{user.name}</span>
					<span>{user.surname}</span>
				</div>
				<div className={styles.date}>{d}</div>
			</div>
		</Link>
	)
}

export default FreshUserItem
