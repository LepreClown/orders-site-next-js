import Home from '@/screens/home/Home'

import { NextPageAuth } from '@/shared/types/auth.types'

const HomePage: NextPageAuth = () => {
	return <Home />
}

HomePage.isOnlyUser = 'user'

export default HomePage
