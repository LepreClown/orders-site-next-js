import { FC } from 'react'

import Button from '@/ui/button/Button'

const AdminModalButton: FC<{
	toggle: () => void
	title?: string
}> = ({ title, toggle }) => {
	return <Button onClick={toggle}>{`Создать ${title ? title : ''}`}</Button>
}

export default AdminModalButton
