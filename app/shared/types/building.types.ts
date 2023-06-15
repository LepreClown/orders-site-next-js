export interface IBuildingItem {
	id: number
	building_name: string
}

export interface IBuilding {
	quantity_buildings: number
	buildings: IBuildingItem[]
}
