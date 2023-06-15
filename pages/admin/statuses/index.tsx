import StatusList from '@/screens/admin/statuses/StatusList'

import { NextPageAuth } from '@/shared/types/auth.types'

const StatusListPage: NextPageAuth = () => {
	return <StatusList />
}
StatusListPage.isOnlyAdmin = 'admin'

export default StatusListPage
