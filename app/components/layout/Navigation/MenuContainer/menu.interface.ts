import { TypeMaterialIconName } from '@/shared/types/icon.types'

export interface IMenuItem {
	icon: TypeMaterialIconName
	title: string
	link: string
	secondLink: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
