import { FC } from 'react'

import Button from '@/ui/button/Button'

const ProfileModalButton: FC<{
	toggle: () => void
	title?: string
}> = ({ title, toggle }) => {
	return (
		<Button className="text-gray-950 dark:text-white" onClick={toggle}>{`Редактировать ${
			title ? title : ''
		}`}</Button>
	)
}

export default ProfileModalButton
