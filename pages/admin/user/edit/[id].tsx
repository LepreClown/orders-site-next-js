import UserEdit from '@/components/screens/admin/user/UserEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserEditPage: NextPageAuth = () => {
	return <UserEdit />
}

UserEditPage.isOnlyAdmin = 'admin'

export default UserEditPage
