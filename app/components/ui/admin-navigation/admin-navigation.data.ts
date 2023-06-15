import { getAdminHomeUrl, getAdminUrl } from 'config/url.config'

import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Статистика',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Пользователи',
		link: getAdminUrl('users'),
	},
	{
		title: 'Заявки',
		link: getAdminUrl('orders'),
	},
	{
		title: 'Статусы',
		link: getAdminUrl('statuses'),
	},
	{
		title: 'Срочность',
		link: getAdminUrl('importants'),
	},
	{
		title: 'Системы',
		link: getAdminUrl('systems'),
	},
	{
		title: 'Объекты',
		link: getAdminUrl('buildings'),
	},
]
