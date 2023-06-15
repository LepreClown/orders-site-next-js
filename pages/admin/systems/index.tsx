import SystemList from '@/screens/admin/systems/SystemList'

import { NextPageAuth } from '@/shared/types/auth.types'

const SystemListPage: NextPageAuth = () => {
	return <SystemList />
}

SystemListPage.isOnlyAdmin = 'admin'

export default SystemListPage
