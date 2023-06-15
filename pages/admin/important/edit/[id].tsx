import ImportantEdit from '@/screens/admin/important/ImportantEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const ImportantEditPage: NextPageAuth = () => {
	return <ImportantEdit />
}

ImportantEditPage.isOnlyAdmin = 'admin'

export default ImportantEditPage
