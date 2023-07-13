import Link from 'next/link'
import { FC } from 'react'

import { IUserItem } from '@/shared/types/user.types'

import { convertDateToTimeAgo } from '@/utils/date/convertDateToTimeAgo'

import { getAdminUrl } from '../../../../../config/url.config'

const FreshUserItem: FC<{ user: IUserItem }> = ({ user }) => {
	const d = convertDateToTimeAgo(new Date(user.created_at))
	return (
		<Link href={getAdminUrl(`user/edit/${user.id}`)}>
			<div className="flex flex-col items-center justify-center">
				<div className="flex gap-2 text-[22px] font-semibold">
					<span>{user.name}</span>
					<span>{user.surname}</span>
				</div>
				<div className="text-[16px] font-medium text-gray-600 text-opacity-70 dark:text-opacity-100">
					{d}
				</div>
			</div>
		</Link>
	)
}

export default FreshUserItem
