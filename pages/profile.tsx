import Profile from '@/screens/profile/Profile'

import { NextPageAuth } from '@/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}
ProfilePage.isOnlyUser = 'user'

export default ProfilePage
