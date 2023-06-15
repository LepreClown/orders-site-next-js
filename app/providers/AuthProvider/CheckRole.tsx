import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()

	const router = useRouter()

	const Children = () => <>{children}</>

	if (user?.role === 'admin') return <Children />

	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}

	const isUser = user?.role !== 'admin'

	if (isUser && isOnlyUser) return <Children />
	else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
