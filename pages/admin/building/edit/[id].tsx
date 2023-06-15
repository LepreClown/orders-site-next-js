import BuildingEdit from '@/screens/admin/building/BuildingEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const BuildingEditPage: NextPageAuth = () => {
	return <BuildingEdit />
}

BuildingEditPage.isOnlyAdmin = 'admin'

export default BuildingEditPage
