import { FC, MouseEvent } from 'react'

import MaterialIcon from '@/ui/icons/MaterialIcon'

import { useActions } from '@/hooks/useActions'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const logoutHandler = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={logoutHandler}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogoutButton
