import { FC } from 'react'

import Button from '@/ui/button/Button'

import { useModal } from '@/hooks/useModal'

const AdminCreateButton: FC<{
	onClick?: () => void
	title?: string
}> = ({ onClick, title }) => {
	const { toggle, isShow } = useModal()

	return <Button onClick={toggle}>{`Создать ${title ? title : ''}`}</Button>
}

export default AdminCreateButton
