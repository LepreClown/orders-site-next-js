import { FC } from 'react'

import Button from '@/ui/button/Button'

const AdminCreateButton: FC<{
	onClick?: () => void
	title?: string
}> = ({ onClick, title }) => {
	return <Button onClick={onClick}>{`Создать ${title ? title : ''}`}</Button>
}

export default AdminCreateButton
