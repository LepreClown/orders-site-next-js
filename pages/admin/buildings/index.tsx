import BuildingList from '@/screens/admin/buildings/BuildingList'

import { NextPageAuth } from '@/shared/types/auth.types'

const BuildingListPage: NextPageAuth = () => {
	return <BuildingList />
}

BuildingListPage.isOnlyAdmin = 'admin'

export default BuildingListPage
