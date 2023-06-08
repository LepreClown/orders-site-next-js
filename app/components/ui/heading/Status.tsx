import { FC } from 'react'

import MaterialIcon from '@/ui/icons/MaterialIcon'

const Status: FC<{ title: string; isAdmin: boolean }> = ({ title, isAdmin }) => {
	return (
		<div className="flex items-center  gap-1.5 mb-12">
			<MaterialIcon name={isAdmin ? 'MdAdminPanelSettings' : 'MdSupervisedUserCircle'} />
			<h2 className="text-gray-600 text-lg  font-semibold">{title}</h2>
		</div>
	)
}

export default Status
