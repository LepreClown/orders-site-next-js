import ImportantList from '@/screens/admin/importants/ImportantList'

import { NextPageAuth } from '@/shared/types/auth.types'

const ImportantListPage: NextPageAuth = () => {
	return <ImportantList />
}

ImportantListPage.isOnlyAdmin = 'admin'

export default ImportantListPage
