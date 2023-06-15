import { useRouter } from 'next/router'
import { FC, MouseEvent } from 'react'

import MaterialIcon from '@/ui/icons/MaterialIcon'

import { useActions } from '@/hooks/useActions'

const LogoutButton: FC = () => {
	const { logout } = useActions()
	const { push } = useRouter()
	const logoutHandler = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		logout()
		push('/')
	}

	return (
		<li>
			<a onClick={logoutHandler}>
				<MaterialIcon name="MdLogout" />
				<span>Выйти</span>
			</a>
		</li>
	)
}

export default LogoutButton
