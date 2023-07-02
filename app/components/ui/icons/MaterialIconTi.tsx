import { FC } from 'react'
import * as MaterialIconsTi from 'react-icons/ti'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeMaterialIconNameTi } from '@/shared/types/icon.types'

const MaterialIconTi: FC<{ name: TypeMaterialIconNameTi }> = ({ name }) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = MaterialIconsTi[name]

	if (isRenderClient) return <IconComponent /> || <MaterialIconsTi.TiThSmall />
	else return null
}

export default MaterialIconTi
