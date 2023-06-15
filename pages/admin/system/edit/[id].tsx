import SystemEdit from '@/screens/admin/system/SystemEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const SystemEditPage: NextPageAuth = () => {
	return <SystemEdit />
}

SystemEditPage.isOnlyAdmin = 'admin'

export default SystemEditPage
