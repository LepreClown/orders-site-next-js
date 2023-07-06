import { getAdminHomeUrl } from 'config/url.config'
import { FC } from 'react'

import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import LogoutButton from '@/components/layout/Navigation/MenuContainer/auth/LogoutButton'

import { useAuth } from '@/hooks/useAuth'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem item={{ icon: 'MdSettings', link: '/profile', title: 'Профиль' }} />
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/', title: 'Войти' }} />
			)}

			{user?.role === 'admin' && (
				<MenuItem
					item={{ icon: 'MdOutlineLock', link: getAdminHomeUrl(), title: 'Админ панель' }}
				/>
			)}
		</>
	)
}

export default AuthItems
