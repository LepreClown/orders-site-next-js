import { IMaterials } from '@/shared/types/orders.types'

export const extractQuantities = (materials: IMaterials[]) => {
	const quantityArray = materials.map((item) => item.quantity)

	return quantityArray.join(', ')
}
