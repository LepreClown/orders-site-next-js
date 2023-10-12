import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useRedirect = () => {
	const { user } = useAuth()

	const { query, push } = useRouter()

	useEffect(() => {
		if (!user) {
			push('/auth')
		}
	}, [user, push])
}
