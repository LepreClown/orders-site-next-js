import StatusEdit from '@/screens/admin/status/StatusEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const StatusEditPage: NextPageAuth = () => {
	return <StatusEdit />
}

StatusEditPage.isOnlyAdmin = 'admin'

export default StatusEditPage
