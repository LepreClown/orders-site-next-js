import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'

export const firstMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			link: '/home',
			title: 'Заявки',
		},
	],
}

export const userMenu: IMenu = {
	title: 'Общее',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
