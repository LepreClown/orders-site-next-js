import { IMaterials } from '@/shared/types/orders.types'

export const extractMaterials = (materials: IMaterials[]) => {
	const materialArray = materials.map((item) => item.material)

	return materialArray.join(', ')
}
